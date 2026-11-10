# ARCADIA WASTELAND — GitHub Pages

2065년 아르카디아 황무지 세계관 및 주요 인물 8명의 정적 웹 아카이브입니다.

## 파일 구성
- `index.html` : 메인 / 세계관 / 인물 목록 및 상세 프로필 팝업
- `characters.js` : 8명 인물 데이터
- `assets/css/style.css` : 디자인 및 반응형 레이아웃
- `assets/js/app.js` : 페이지 전환, 소속 필터, 프로필 팝업
- `assets/images/` : 인물 이미지 8장

## GitHub Pages 배포
1. GitHub에서 새 Public Repository를 만듭니다. (예: `arcadia-wasteland`)
2. 압축을 풀고 **폴더 안의 파일과 폴더 전체**를 저장소 최상위(root)에 업로드합니다.
   - `index.html`이 저장소 첫 화면에 바로 있어야 합니다.
3. 저장소의 **Settings → Pages**로 이동합니다.
4. **Build and deployment → Deploy from a branch**를 선택합니다.
5. Branch는 `main`, Folder는 `/ (root)`로 지정하고 Save를 누릅니다.
6. 잠시 후 `https://깃허브아이디.github.io/저장소이름/` 주소로 접속할 수 있습니다.

## 인물 정보 수정
`characters.js` 파일을 열어 각 인물의 `name`, `age`, `faction`, `role`, `appearance`, `personality`, `speech`, `background`, `ability` 항목을 수정하면 됩니다.

## 사진 교체
`assets/images/` 안의 이미지 파일을 같은 파일명으로 교체하면 됩니다. 파일명을 바꾸려면 `characters.js`의 해당 인물 `image` 값도 함께 수정하세요.

## 참고
- 외부 서버나 데이터베이스 없이 작동하는 정적 사이트입니다.
- 웹폰트와 메인 배경 이미지는 외부 인터넷 연결이 있을 때 로드됩니다.
- 인물 상세 정보는 카드 클릭 시 현재 페이지 위에 팝업으로 표시됩니다. 바깥 영역 클릭 또는 `Esc` 키로 닫을 수 있습니다.
