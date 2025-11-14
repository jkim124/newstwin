(() => {
  const postId = document.getElementById("likeBtn").dataset.postId;

  const likeBtn = document.getElementById("likeBtn");
  const heartIcon = document.getElementById("heartIcon");
  const likeCountEl = document.getElementById("likeCount");

  const bookmarkBtn = document.getElementById("bookmarkBtn");
  const bookmarkIcon = document.getElementById("bookmarkIcon");

  const sideLike = document.getElementById("sideLike");
  const sideLikeCount = document.getElementById("sideLikeCount");
  const sideBookmark = document.getElementById("sideBookmark");
  const sideCommentCount = document.getElementById("sideCommentCount");

  const ensureAuthOrRedirect = (res) => {
    if (res.status === 401 || res.status === 403) {
      window.location.href = "/login";
      return false;
    }
    return true;
  };

  /* 좋아요 UI */
  const updateLikeUI = (liked, count) => {
    heartIcon.textContent = liked ? "❤️" : "🤍";
    likeBtn.dataset.liked = liked;
    likeCountEl.textContent = count;
    sideLike.querySelector(".emoji").textContent = liked ? "❤️" : "🤍";
    sideLikeCount.textContent = count;
  };

  /* 북마크 UI */
  const updateBookmarkUI = (bookmarked) => {
    bookmarkIcon.className = bookmarked ? "bi bi-bookmark-fill" : "bi bi-bookmark";
    bookmarkBtn.dataset.bookmarked = bookmarked;

    sideBookmark.querySelector("i").className =
        bookmarked ? "bi bi-bookmark-fill text-primary" : "bi bi-bookmark";
  };

  document.addEventListener("DOMContentLoaded", async () => {

    /* 댓글 Total 불러오기 */
    const resCommentCount = await fetch(`/api/posts/${postId}/comments?page=0&size=1`);
    if (resCommentCount.ok) {
      const data = await resCommentCount.json();
      const total = data.totalCount || 0;

      const ct = document.getElementById("commentTotal");
      if (ct) ct.textContent = total;

      sideCommentCount.textContent = total;
    }

    /* 좋아요/북마크 불러오기 */
    const [resCount, resLike, resBookmark] = await Promise.all([
      fetch(`/api/posts/${postId}/like/count`),
      fetch(`/api/posts/${postId}/like`),
      fetch(`/api/posts/${postId}/bookmark`)
    ]);

    if (resCount.ok) {
      const { likeCount } = await resCount.json();
      likeCountEl.textContent = likeCount;
      sideLikeCount.textContent = likeCount;
    }
    if (resLike.ok) {
      const { liked, likeCount } = await resLike.json();
      updateLikeUI(liked, likeCount);
    }
    if (resBookmark.ok) {
      const { bookmarked } = await resBookmark.json();
      updateBookmarkUI(bookmarked);
    }
  });

  /* 좋아요 버튼 */
  likeBtn.addEventListener("click", async () => {
    const res = await fetch(`/api/posts/${postId}/like`, { method: "POST" });
    if (!ensureAuthOrRedirect(res)) return;

    const { liked, likeCount } = await res.json();
    updateLikeUI(liked, likeCount);
  });

  sideLike.addEventListener("click", () => likeBtn.click());

  /* 북마크 버튼 */
  bookmarkBtn.addEventListener("click", async () => {
    const res = await fetch(`/api/posts/${postId}/bookmark`, { method: "POST" });
    if (!ensureAuthOrRedirect(res)) return;

    const { bookmarked } = await res.json();
    updateBookmarkUI(bookmarked);
  });

  sideBookmark.addEventListener("click", () => bookmarkBtn.click());

  /* 공유 메뉴 (본문 아래) */
  const shareBtn = document.getElementById("shareBtn");
  const shareMenu = document.getElementById("shareMenu");

  if (shareBtn && shareMenu) {

    // 열기/닫기
    shareBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      shareMenu.classList.toggle("d-none");
    });

    // 바깥 클릭하면 닫힘
    document.addEventListener("click", (e) => {
      if (
          !shareMenu.classList.contains("d-none") &&
          !shareMenu.contains(e.target) &&
          !shareBtn.contains(e.target)
      ) {
        shareMenu.classList.add("d-none");
      }
    });

    // URL 복사
    shareMenu.querySelector(".share-copy")?.addEventListener("click", async () => {
      await navigator.clipboard.writeText(window.location.href);
      alert("주소가 복사되었습니다.");
      shareMenu.classList.add("d-none");
    });

    // SNS 공유
    shareMenu.querySelector(".share-sns")?.addEventListener("click", () => {
      const url = encodeURIComponent(window.location.href);
      window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${url}`,
          "_blank",
          "width=600,height=500"
      );
      shareMenu.classList.add("d-none");
    });

  }
})();
