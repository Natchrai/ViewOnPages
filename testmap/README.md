# 쉼 SUIM

고양·파주 휴식 공간을 지도에서 탐색하는 샘플 서비스입니다.

## GitHub Pages

배포 주소: https://natchrai.github.io/testmap/

```sh
pnpm install --frozen-lockfile
pnpm build:pages
```

`docs/`에 정적 배포 파일을 생성합니다. GitHub의 `Natchrai/testmap`
저장소에 소스와 `docs/`를 함께 커밋하고 푸시하세요.
Pages 설정은 **Deploy from a branch → main → /docs**입니다.
화면을 수정한 뒤에는 다시 빌드해야 배포 파일에 반영됩니다.

`ViewOnPages/testmap` 폴더에만 푸시하면 별도 `Natchrai/testmap`
저장소에는 자동으로 반영되지 않습니다.

기존 서버 기반 개발은 `pnpm dev`, 빌드는 `pnpm build`를 사용합니다.
