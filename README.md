# 📰 NewsTwin  
### AI 기반 자동 경제 뉴스 분석 & 개인화 뉴스레터 플랫폼

<img src="images/logo.PNG" width="220" alt="NewsTwin Logo">

**경제 뉴스를 자동 수집 → AI 분석 → 개인 맞춤 이메일 뉴스레터 발송까지  
전 과정을 자동화한 NewsTwin 서비스입니다.**

Alan AI + ChatGPT 기반 핵심 분석과  
Spring Boot + PostgreSQL 기반 자동화 파이프라인으로 운영됩니다.

---

# 👥 Team NewsTwin

**NewsTwin 팀은 AI 자동화, 백엔드 개발, 웹 서비스 UI·UX 설계 등 다양한 역할을 협업하여 프로젝트를 완성했습니다.**

## 🎯 프로젝트 목표
- AI 기반 자동 경제 뉴스 분석 및 개인화 뉴스레터 서비스 개발  
- Alan AI + ChatGPT를 활용한 **뉴스 수집 → 분석 → 게시글 생성** 자동화  
- 회원/구독/게시글/메일 발송까지 연결되는 **엔드-투-엔드 서비스 흐름 구축**  
- 관리자(Admin) 페이지로 안정적인 운영 관리 환경 제공  

## 👨‍💻 팀원 소개

| 이름 | 담당 기능 |
|------|-----------|
| **최보윤** | 회원관리 · 인증 · 마이페이지 · AI 파이프라인 |
| **김재영** | 게시글/피드 · 캐싱 · 용어사전 · 필터링 |
| **최애정** | 관리자(Admin) · 댓글 · 이메일 발송/구독해지 |

---

# 📄 프로젝트 문서 (Notion)

👉 **전체 문서 보기:**  
https://www.notion.so/oreumi/5-NT-NewsTwin-299ebaa8982b80b6b9b6e7ce37a89583

---

# 🚀 Milestones (핵심 성과 요약)

| 단계 | 기간 | 달성 내용 |
|------|--------|-----------|
| **기획 & 설계** | 10/28 ~ 10/30 | ERD, 기능명세, 화면설계(Figma), 브랜치전략 설정 |
| **핵심 기능 구현** | 10/31 ~ 11/07 | 회원·구독·게시글 CRUD, Alan→ChatGPT 파이프라인, 이메일 자동발송 |
| **기능 확장 & UX 개선** | 11/08 ~ 11/14 | 좋아요·북마크·댓글·공유하기, 경제용어 툴팁 기능 |
| **테스트 & 배포** | 11/15 ~ 11/18 | EC2/RDS 배포, CI/CD, 보안환경, 실서버 스케줄러 테스트 |
| **발표 준비** | 11/19 ~ 11/20 | 발표자료 제작, 시연 영상, 데모 시나리오 구성 |
| **최종 발표** | 11/21 | 프로젝트 발표 및 회고 |

---

# ⚙️ 기능 요약 (Feature Summary)

### 🔐 회원 / 인증
- JWT 로그인, 회원가입, 소셜 로그인(OAuth2)
- 마이페이지: 정보 수정 · 관심카테고리 설정 · 구독 수신 여부

### 🤖 뉴스 자동 분석 파이프라인
- Alan AI: 카테고리별 최신 뉴스 5개 수집 (09시 Scheduler)
- ChatGPT: 긍정/부정 분석 + 요약 생성 + 키워드 추출
- 중복 뉴스 방지(사용 키워드 누적) & 직렬 구조 처리

### 📧 이메일 뉴스레터
- 구독자별 개인화 뉴스 구성
- `@Async` 기반 비동기 이메일 발송
- UUID 기반 구독 해지 링크 (로그인 불필요)

### 📰 게시글 / 피드
- 카테고리별 뉴스 리스트 & 상세 페이지
- 좋아요 · 북마크 · 댓글 · 대댓글
- Excel 캐싱 기반 경제 용어 자동 툴팁

### 🛠 관리자(Admin)
- 회원/게시글/댓글/메일 로그 관리
- 게시글 내용 수정 및 운영 도구 제공
- 관리자 전용 대시보드

---

# 🗂️ 디렉토리 구조

<pre>
NewsTwin
  │  index.html
  │
  ├─admin
  │      comments.html
  │      dashboard.html
  │      login.html
  │      mails-contents.html
  │      mails.html
  │      posts-contents.html
  │      posts.html
  │      users.html
  │
  ├─auth
  │      login.html
  │      signup.html
  │      verify-info.html
  │      verify-result.html
  │
  ├─board
  │      detail.html
  │      form.html
  │      list.html
  │
  ├─fragment
  │      modal.html
  │
  ├─layout
  │      footer.html
  │      header.html
  │      header_admin.html
  │      pagination.html
  │      sidebar.html
  │
  ├─mypage
  │      bookmarks.html
  │      edit.html
  │      main.html
  │      subscription.html
  │      withdraw.html
  │
  └─news
          detail.html
          list.html
</pre>

---

# 🛠 Tech Stack

<div align="center">

### **Backend**
<img src="https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=openjdk&logoColor=white"/>
<img src="https://img.shields.io/badge/SpringBoot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white"/>
<img src="https://img.shields.io/badge/SpringSecurity-6DB33F?style=for-the-badge&logo=springsecurity&logoColor=white"/>
<img src="https://img.shields.io/badge/JPA-Hibernate-59666C?style=for-the-badge&logo=hibernate&logoColor=white"/>

### **Database**
<img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white"/>

### **AI / External API**
<img src="https://img.shields.io/badge/OpenAI-ChatGPT-74AA9C?style=for-the-badge&logo=openai&logoColor=white"/>
<img src="https://img.shields.io/badge/AlanAI-000000?style=for-the-badge&logoColor=white"/>

### **Frontend**
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white"/>

### **Collaboration**
<img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white"/>
<img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white"/>

</div>

---

## 🏅 Stats

<p align="center">
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=ysy98081&layout=compact&bg_color=180,12a3d3,00000000&title_color=000000&text_color=000000"/>
</p>
