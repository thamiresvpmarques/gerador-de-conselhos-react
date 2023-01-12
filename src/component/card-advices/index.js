import { useEffect, useState } from "react";
import { getAdvices } from "../../services";
import icon from "../../images/icon-dice.svg";
import lineImg from "../../images/pattern-divider-desktop.svg";
import * as Styled from "./style";

function AdvicesCard() {
  const [advice, setAdvice] = useState([]);

  async function fetchData() {
    const data = await getAdvices();
    setAdvice(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Styled.CardSection>
      <Styled.Card>
        <Styled.Id>Advice#{advice.slip?.id} </Styled.Id>
        <Styled.TextAdvice>"{advice.slip?.advice}"</Styled.TextAdvice>
        <Styled.line src={lineImg} />
        <Styled.Btn onClick={fetchData}>
          <img src={icon} />
        </Styled.Btn>
      </Styled.Card>
    </Styled.CardSection>
  );
}

export { AdvicesCard };
