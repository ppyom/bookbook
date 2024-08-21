# BookBook

<div align="center">

![로고](./src/assets/images/logo.svg)

[![Demo](https://img.shields.io/badge/Demo-ffffff?style=flat-square&color=21201f)](https://bookbook.ppyom.com/) / [![Notion](https://img.shields.io/badge/프로젝트-ffffff?style=flat-square&logo=Notion&logoColor=000000&labelColor=ffffff&color=ffffff)](https://radical-devourer-8fb.notion.site/BookBook-bc214ebccb674803a5eb7f69ff3b7120)

![HTML](https://img.shields.io/badge/HTML5-ffffff?style=flat-square&logo=HTML5&logoColor=ffffff&labelColor=E34C26&color=E34C26)
![CSS](https://img.shields.io/badge/CSS3-ffffff?style=flat-square&logo=CSS3&logoColor=ffffff&labelColor=2965f1&color=2965f1)
![JavaScript](https://img.shields.io/badge/JavaScript-ffffff?style=flat-square&logo=JavaScript&logoColor=323330&labelColor=f0db4f&color=f0db4f)

</div>

BookBook은 책을 좋아하는 사용자들이 신간 도서 또는 검색된 도서 목록을 통해 내가 보고싶은 책을 즐겨찾기에 등록하고, 이후 즐겨찾기에 등록한 책을 편리하게 찾을 수 있도록 도와주는 웹사이트 입니다.

## 💡 주요 기능

### 신간 도서

- BookBook의 첫 화면에서 신간 도서를 확인할 수 있습니다.

### 책 검색

- 최소 1글자, 최대 25글자를 입력하여 원하는 책을 검색할 수 있습니다.

### 책 즐겨찾기

- 책의 오른쪽 하단 하트를 클릭하면 localStorage에 저장/삭제 됩니다.
- 오른쪽 상단의 하트 버튼을 클릭하면 bookmark modal이 open되어 저장한 bookmark list를 확인할 수 있습니다.
- 즐겨찾기는 최대 20개 까지 저장할 수 있습니다.

## ▶️ 실행 방법

1. server([bookbook-server](https://github.com/ppyom/bookbook-server))를 먼저 설정합니다.
2. `npm i`를 입력해 필요한 라이브러리를 설치합니다.
   - live-server, prettier
3. `config.js` 파일의 **api.baseurl**을 1에서 실행시킨 서버의 주소로 변경합니다.
   - 이 때 trailing slash는 붙이지 않습니다.
   - ✅`https://example.com`, ❌`https://example.com/`
4. `npm run dev`를 입력해 서버를 실행합니다.

## 🧾 오류 해결 방법

1. 처음 실행했는데 로딩 UI 이후 아무것도 나오지 않습니다.

   1. `ERR_CONNECTION_REFUSED`

      > `ERR_CONNECTION_REFUSED`의 경우 서버와 연결할 수 없을 때 발생합니다.

      - 서버 url로 접근해 서버가 실행되고있는지 확인하고, 실행되어있지 않다면 실행합니다.
      - 서버를 설정하지 않은 경우, [서버 설정](https://github.com/ppyom/bookbook-server?tab=readme-ov-file#%EF%B8%8F-%EC%8B%A4%ED%96%89-%EB%B0%A9%EB%B2%95)을 완료하고 서버를 실행합니다.

   2. `CORS`

      > 현재 프로젝트에서 CORS 관련 오류는 서버가 허용하지 않은 url에서 서버에 접근할 때 발생할 수 있습니다.
      >
      > 서버를 실행하지 않은 경우, 설치 후 `config.js` 파일을 수정하지 않은 경우, 서버에서 환경 변수 파일을 설정하지 않은 상황에서 발생합니다.

      - [서버](https://github.com/ppyom/bookbook-server)를 설정하지 않았다면 서버를 설정하고 실행합니다.
      - `config.js` 파일의 **api.baseurl**을 서버 url로 변경합니다.
      - 서버의 `.env` 파일의 **CLIENT_URL**을 현재 접속한 url로 변경합니다.
        - `.env` 파일을 수정한 경우 서버 재시작이 필요합니다.
