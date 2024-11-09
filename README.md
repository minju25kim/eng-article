# 내가읽은 영어기사

## 무엇을 위해 만든?
- [ ] 읽은 기사 링크를 붙여 넣기
- [ ] form으로 제출
- [ ] 기사 링크를 받아서 AI 분석 > 어떤 ai를 활용할 것인가
- [ ] 기자와 기사 링크, 분석한 기사 내용 날짜 등을 db에 입력
- [ ] DB에서 받아온 기사들을 list로 정리해서 rendering
- [ ] 기사제목 날짜 드롭다운 화살표
- [ ] 드롭다운 내용은 ai분석한 결과
- [ ] 스크롤 계속 내리면 n개 단위마다 로딩
- [ ] t개 이상 넘어가면 pagination
- [ ] dark/light theme 사용
- [x] react 기반 ui libarary 사용 > material ui
- [x] vite 사용
- [ ] express 사용
- [ ] mongodb사용 > json
- [ ] dockerize > aws vs https://fly.io/
- [ ] monorepo vs multi repo > https://velog.io/@sms8377/DevOps-MonoRepo%EB%9E%80
- [x] command+enter 누르면 기사 저장하기 > 혹은 click
- [ ] search in the navigation


## database
```sql
-- Create the table with tags as a JSON array
CREATE TABLE articles (
    id INTEGER PRIMARY KEY,
    title TEXT,
    date DATE,
    link TEXT,
    summary TEXT,
    tags JSON
);

-- Insert the data with tags as a JSON array
INSERT INTO articles (id, title, date, link, summary, tags)
VALUES (
    1,
    'Why You Should Never Retire',
    '2024-01-25',
    'https://www.economist.com/business/2024/01/25/why-you-should-never-retire',
    'Article discusses the advantages of staying active in work as one ages, highlighting potential benefits to health and well-being as well as economic stability.',
    '["retirement", "health", "economy", "career longevity"]'
);
```
