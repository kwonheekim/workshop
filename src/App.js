import React, { useState } from "react";
import { Space, Table, Tag } from "antd";
import styled from "styled-components";

const App = () => {
  // 게임 종류
  const [gameType1, setGameType1] = useState(1);

  // 간주 가요
  const [regard10, setRegard10] = useState(false);
  const [regard20, setRegard20] = useState(false);
  const [regard30, setRegard30] = useState(false);
  const [regard40, setRegard40] = useState(false);
  const [regard50, setRegard50] = useState(false);

  // 클래식
  const [classic10, setClassic10] = useState(false);
  const [classic20, setClassic20] = useState(false);
  const [classic30, setClassic30] = useState(false);
  const [classic40, setClassic40] = useState(false);
  const [classic50, setClassic50] = useState(false);

  // 국내 영화 ost
  const [domesticMovie10, setDomesticMovie10] = useState(false);
  const [domesticMovie20, setDomesticMovie20] = useState(false);
  const [domesticMovie30, setDomesticMovie30] = useState(false);
  const [domesticMovie40, setDomesticMovie40] = useState(false);
  const [domesticMovie50, setDomesticMovie50] = useState(false);

  // 애니메이션
  const [animation10, setAnimation10] = useState(false);
  const [animation20, setAnimation20] = useState(false);
  const [animation30, setAnimation30] = useState(false);
  const [animation40, setAnimation40] = useState(false);
  const [animation50, setAnimation50] = useState(false);

  // 해외 영화 & 드라마 ost
  const [overseasMovie10, setOverseasMovie10] = useState(false);
  const [overseasMovie20, setOverseasMovie20] = useState(false);
  const [overseasMovie30, setOverseasMovie30] = useState(false);
  const [overseasMovie40, setOverseasMovie40] = useState(false);
  const [overseasMovie50, setOverseasMovie50] = useState(false);

  // randombox
  const [randomBox1, setRandomBox1] = useState(false);
  const [randomBox2, setRandomBox2] = useState(false);
  const [randomBox3, setRandomBox3] = useState(false);
  const [randomBox4, setRandomBox4] = useState(false);

  const columns = [
    {
      title: (
        <div
          style={{
            width: "200px",
            height: "50px",
          }}
        >
          &nbsp;
        </div>
      ),
      dataIndex: "0",
      key: "0",
    },
    {
      title: <Counter>10점</Counter>,
      dataIndex: "10",
      key: "10",
    },
    {
      title: <Counter>20점</Counter>,
      dataIndex: "20",
      key: "20",
    },
    {
      title: <Counter>30점</Counter>,
      dataIndex: "30",
      key: "30",
    },
    {
      title: <Counter>40점</Counter>,
      dataIndex: "40",
      key: "40",
    },
    {
      title: <Counter>50점</Counter>,
      dataIndex: "50",
      key: "50",
    },
  ];
  const data = [
    {
      key: "1",
      0: (
        <CategoryTitle>
          국내 영화 <br />
          OST
        </CategoryTitle>
      ),
      10: (
        <div>
          {domesticMovie10 ? (
            <DomesticText>
              무한도전 <br />
              (돈가방을 갖고 튀어라)
            </DomesticText>
          ) : (
            <DomesticBox
              onClick={() => {
                setDomesticMovie10(!domesticMovie10);
              }}
            />
          )}
        </div>
      ),
      20: (
        <div>
          {domesticMovie20 ? (
            <DomesticText>대부님</DomesticText>
          ) : (
            <DomesticBox
              onClick={() => {
                setDomesticMovie20(!domesticMovie20);
              }}
            />
          )}
        </div>
      ),
      30: (
        <div>
          {domesticMovie30 ? (
            <DomesticText>
              2번째 <br /> 천만관객
            </DomesticText>
          ) : (
            <DomesticBox
              onClick={() => {
                setDomesticMovie30(!domesticMovie30);
              }}
            />
          )}
        </div>
      ),
      40: (
        <div>
          {domesticMovie40 ? (
            <DomesticText>BH</DomesticText>
          ) : (
            <DomesticBox
              onClick={() => {
                setDomesticMovie40(!domesticMovie40);
              }}
            />
          )}
        </div>
      ),
      50: (
        <div>
          {domesticMovie50 ? (
            <DomesticText>간지</DomesticText>
          ) : (
            <DomesticBox
              onClick={() => {
                setDomesticMovie50(!domesticMovie50);
              }}
            />
          )}
        </div>
      ),
    },
    {
      key: "2",
      0: (
        <CategoryTitle>
          간주 <br />
          (가요)
        </CategoryTitle>
      ),
      10: (
        <div>
          {regard10 ? (
            <RegardText>LIKE</RegardText>
          ) : (
            <RegardBox
              onClick={() => {
                setRegard10(!regard10);
              }}
            />
          )}
        </div>
      ),
      20: (
        <div>
          {regard20 ? (
            <RegardText>신부</RegardText>
          ) : (
            <RegardBox
              onClick={() => {
                setRegard20(!regard20);
              }}
            />
          )}
        </div>
      ),
      30: (
        <div>
          {regard30 ? (
            <RegardText>25</RegardText>
          ) : (
            <RegardBox
              onClick={() => {
                setRegard30(!regard30);
              }}
            />
          )}
        </div>
      ),
      40: (
        <div>
          {regard40 ? (
            <RegardText>Unit</RegardText>
          ) : (
            <RegardBox
              onClick={() => {
                setRegard40(!regard40);
              }}
            />
          )}
        </div>
      ),
      50: (
        <div>
          {regard50 ? (
            <RegardText>소</RegardText>
          ) : (
            <RegardBox
              onClick={() => {
                setRegard50(!regard50);
              }}
            />
          )}
        </div>
      ),
    },
    {
      key: "3",
      0: (
        <CategoryTitle>
          해외 영화 & 드라마 <br />
          OST
        </CategoryTitle>
      ),
      10: (
        <div>
          {overseasMovie10 ? (
            <OverseasMovieText>이윤석, 김진수</OverseasMovieText>
          ) : (
            <OverseasMovieBox
              onClick={() => {
                setOverseasMovie10(!overseasMovie10);
              }}
            />
          )}
        </div>
      ),
      20: (
        <div>
          {overseasMovie20 ? (
            <OverseasMovieText>루게릭</OverseasMovieText>
          ) : (
            <OverseasMovieBox
              onClick={() => {
                setOverseasMovie20(!overseasMovie20);
              }}
            />
          )}
        </div>
      ),
      30: (
        <div>
          {overseasMovie30 ? (
            <OverseasMovieText>크라임씬</OverseasMovieText>
          ) : (
            <OverseasMovieBox
              onClick={() => {
                setOverseasMovie30(!overseasMovie30);
              }}
            />
          )}
        </div>
      ),
      40: (
        <div>
          {overseasMovie40 ? (
            <OverseasMovieText>다크나이트</OverseasMovieText>
          ) : (
            <OverseasMovieBox
              onClick={() => {
                setOverseasMovie40(!overseasMovie40);
              }}
            />
          )}
        </div>
      ),
      50: (
        <div>
          {overseasMovie50 ? (
            <OverseasMovieText>문나이트</OverseasMovieText>
          ) : (
            <OverseasMovieBox
              onClick={() => {
                setOverseasMovie50(!overseasMovie50);
              }}
            />
          )}
        </div>
      ),
    },
    {
      key: "4",
      0: <CategoryTitle>클래식</CategoryTitle>,
      10: (
        <div>
          {classic10 ? (
            <ClassicText>DDR</ClassicText>
          ) : (
            <ClassicBox
              onClick={() => {
                setClassic10(!classic10);
              }}
            />
          )}
        </div>
      ),
      20: (
        <div>
          {classic20 ? (
            <ClassicText>season</ClassicText>
          ) : (
            <ClassicBox
              onClick={() => {
                setClassic20(!classic20);
              }}
            />
          )}
        </div>
      ),
      30: (
        <div>
          {classic30 ? (
            <ClassicText>무한궤도</ClassicText>
          ) : (
            <ClassicBox
              onClick={() => {
                setClassic30(!classic30);
              }}
            />
          )}
        </div>
      ),
      40: (
        <div>
          {classic40 ? (
            <ClassicText>평창 축제</ClassicText>
          ) : (
            <ClassicBox
              onClick={() => {
                setClassic40(!classic40);
              }}
            />
          )}
        </div>
      ),
      50: (
        <div>
          {classic50 ? (
            <ClassicText>From</ClassicText>
          ) : (
            <ClassicBox
              onClick={() => {
                setClassic50(!classic50);
              }}
            />
          )}
        </div>
      ),
    },
    {
      key: "5",
      0: <CategoryTitle>애니메이션</CategoryTitle>,
      10: (
        <div>
          {animation10 ? (
            <AnimationText>Fighting</AnimationText>
          ) : (
            <AnimationBox
              onClick={() => {
                setAnimation10(!animation10);
              }}
            />
          )}
        </div>
      ),
      20: (
        <div>
          {animation20 ? (
            <AnimationText>캘시퍼</AnimationText>
          ) : (
            <AnimationBox
              onClick={() => {
                setAnimation20(!animation20);
              }}
            />
          )}
        </div>
      ),
      30: (
        <div>
          {animation30 ? (
            <AnimationText>
              아직 만난적이 없는 너를,
              <br /> 찾고 있어
            </AnimationText>
          ) : (
            <AnimationBox
              onClick={() => {
                setAnimation30(!animation30);
              }}
            />
          )}
        </div>
      ),
      40: (
        <div>
          {animation40 ? (
            <AnimationText>귀뚜라미</AnimationText>
          ) : (
            <AnimationBox
              onClick={() => {
                setAnimation40(!animation40);
              }}
            />
          )}
        </div>
      ),
      50: (
        <div>
          {animation50 ? (
            <AnimationText>스튜</AnimationText>
          ) : (
            <AnimationBox
              onClick={() => {
                setAnimation50(!animation50);
              }}
            />
          )}
        </div>
      ),
    },
  ];

  return (
    <>
      {gameType1 === 1 ? (
        <>
          <GameBox>
            <Sec>
              <RandomBox border={"lefttop"}>
                {randomBox1 ? (
                  <MineGameText color={"red"}>현미 옮기기 </MineGameText>
                ) : (
                  <MineGameBox
                    bgcolor={"red"}
                    onClick={() => setRandomBox1(!randomBox1)}
                  />
                )}
              </RandomBox>
              <RandomBox border={"righttop"}>
                {randomBox2 ? (
                  <MineGameText color={"blue"}>공포의 쿵쿵따</MineGameText>
                ) : (
                  <MineGameBox
                    bgcolor={"blue"}
                    onClick={() => setRandomBox2(!randomBox2)}
                  />
                )}
              </RandomBox>
            </Sec>
            <Sec>
              <RandomBox border={"leftbottom"}>
                {randomBox3 ? (
                  <MineGameText color={"green"}>병뚜껑 날리기</MineGameText>
                ) : (
                  <MineGameBox
                    bgcolor={"green"}
                    onClick={() => setRandomBox3(!randomBox3)}
                  />
                )}
              </RandomBox>
              <RandomBox border={"rightbottom"}>
                {randomBox4 ? (
                  <MineGameText color={"orange"}>카리나 게임</MineGameText>
                ) : (
                  <MineGameBox
                    bgcolor={"orange"}
                    onClick={() => setRandomBox4(!randomBox4)}
                  />
                )}
              </RandomBox>
            </Sec>
          </GameBox>
          <div onClick={() => setGameType1(2)}>Next</div>
        </>
      ) : (
        <Table columns={columns} dataSource={data} />
      )}
    </>
  );
};

const CategoryTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 130px;
`;

const RegardBox = styled.div`
  height: 150px;
  background-color: Blue;
  color: Blue;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    opacity: 0.5;
  }
`;

const RegardText = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 700;
  color: Blue;
`;

const ClassicBox = styled.div`
  height: 150px;
  background-color: green;
  color: green;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    opacity: 0.5;
  }
`;

const ClassicText = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 700;
  color: green;
`;

const DomesticBox = styled.div`
  height: 150px;
  background-color: purple;
  color: purple;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    opacity: 0.5;
  }
`;

const DomesticText = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  color: purple;
`;

const Counter = styled.div`
  width: 200px;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  color: orchid;
`;

const AnimationBox = styled.div`
  height: 150px;
  background-color: orange;
  color: orange;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    opacity: 0.5;
  }
`;

const AnimationText = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  color: orange;
`;

const OverseasMovieBox = styled.div`
  height: 150px;
  background-color: brown;
  color: brown;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    opacity: 0.5;
  }
`;

const OverseasMovieText = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  color: brown;
`;

const GameBox = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Sec = styled.div`
  display: flex;
`;

const RandomBox = styled.div`
  padding: 50px;

  /* left top */
  ${(props) => {
    if (props.border === "lefttop") {
      return `
    border-bottom: 1px solid black;
    border-right: 1px solid black;
    `;
    }
  }}

  /* right top */
  ${(props) => {
    if (props.border === "righttop") {
      return `
    border-bottom: 1px solid black;
    border-left: 1px solid black;
    `;
    }
  }}

  /* left bottom */
  ${(props) => {
    if (props.border === "leftbottom") {
      return `
    border-top: 1px solid black;
    border-right: 1px solid black;
    `;
    }
  }}

  /* right bottom */
  ${(props) => {
    if (props.border === "rightbottom") {
      return `
    border-top: 1px solid black;
    border-left: 1px solid black;
    `;
    }
  }}
`;

const MineGameBox = styled.div`
  width: 300px;
  height: 300px;
  background-color: ${(props) => props.bgcolor};
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`;

const MineGameText = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  font-weight: 700;
  color: ${(props) => props.color};
`;

export default App;
