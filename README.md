# BookBook

<div align="center">

![로고](./src/assets/images/logo.svg)

[Demo](https://bookbook-rho.vercel.app/)

![HTML](https://img.shields.io/badge/HTML5-ffffff?style=flat-square&logo=HTML5&logoColor=ffffff&labelColor=E34C26&color=E34C26)
![CSS](https://img.shields.io/badge/CSS3-ffffff?style=flat-square&logo=CSS3&logoColor=ffffff&labelColor=2965f1&color=2965f1)
![JavaScript](https://img.shields.io/badge/JavaScript-ffffff?style=flat-square&logo=JavaScript&logoColor=323330&labelColor=f0db4f&color=f0db4f)

</div>

BookBook은 책을 좋아하는 사용자들이 신간 도서 또는 검색된 도서 목록을 통해 내가 보고싶은 책을 즐겨찾기에 등록하고, 이후 즐겨찾기에 등록한 책을 편리하게 찾을 수 있도록 도와주는 웹사이트 입니다.

## 💡 주요 기능

### 신간 도서

- BookBook의 첫 화면에서 신간 도서를 확인할 수 있습니다.

### 책 검색

- 최소 1글자, 최대 30글자를 입력하여 원하는 책을 검색할 수 있습니다.

### 책 즐겨찾기

- 책의 오른쪽 하단 하트를 클릭하면 localStorage에 저장/삭제 됩니다.
- 오른쪽 상단의 하트 버튼을 클릭하면 bookmark modal이 open되어 저장한 bookmark list를 확인할 수 있습니다.
- 즐겨찾기는 최대 20개 까지 저장할 수 있습니다.

## ▶️ 실행 방법

1. server([bookbook-server](https://github.com/ppyom/bookbook-server))를 먼저 설정합니다.
2. `npm i`를 입력해 필요한 라이브러리를 설치합니다.
   - live-server, prettier
3. `config.js` 파일의 **api.baseurl**을 1에서 실행시킨 서버의 주소로 변경합니다.
4. `npm run dev`를 입력해 서버를 실행합니다.
