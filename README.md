# TestJWT

1. MONGODB 와 연결을 위해 mongoose 다운 ,
2. 환경변수 설정 dot env 설치
3. mongodb 홈 접속해 db연결
4. mognoose Schema , Model 정의
5. hap joi API를 이용해 Schema data 유효성 검사를 할 수 있다.

# 사용한 API

1. mongoose , dotenv , hap joi , crypto-js

## 부족한 공부

1. 객체 안의 객체 접근과 객체 안의 배열 접근 => 배열도 등장하고 복잡해 질 수록 내가 원하는 데이터에 접근 할 수 있는 연습필요.

2. 객체 전개 구문을 통해 DB에 hashing된 패스워드를 제외한 모든 데이터가 들어 갈 수 있게 해야한다. ==> 전개구문 좀 더 공부

3. CryptoJS import 하는 과정에서 cryptoJS -> CryptoJS 정확하게 확인

4. CryptoJS sign(res.header)에 데이터를 담고 verfify 할때 sign(req.header(verfifytoken))에 담은 데이터를 사용
