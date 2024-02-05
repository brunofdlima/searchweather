import { useState } from "react";
import { GoSearch } from "react-icons/go";
import { WiStrongWind, WiHumidity } from "react-icons/wi";
import { api } from "./services";
import {
  Content,
  Form,
  Response,
  ResponseTitle,
  ResponseTemp,
  Before,
  Left,
  Equal,
  Temp,
  Temp1,
  Title,
  Button,
  Input,
  Container,
} from "./styles";

const App = () => {
  const [cidade, setCidade] = useState("");
  const [previsao, setPrevisao] = useState<any>(null);

  const handleChange = (event: any) => {
    setCidade(event.target.value);
  };

  const handleSearch = async (e: any) => {
    e.preventDefault();
    await api
      .get("", {
        params: {
          q: cidade,
          appid: "9e869bd5113c9de4ddc44bc7c60bb738",
          units: "metric",
          lang: "pt_br",
        },
      })
      .then((data:any) => {
        console.log(data)
        setPrevisao(data.data);
      });
  };

  const mystyle = {
    height: "4.375rem",
    width: "4.375rem",
  };

  return (
    <Content>
      <Form>
        <Before>
          <Title>Search Weather:</Title>
          <div>
            <Input
              id="entrada"
              classname="searchCity"
              value={cidade}
              placeholder="Digite a cidade"
              onChange={handleChange}
            />
            <Button onClick={handleSearch}>
              <GoSearch style={{ margin: "5px 1px 0 0" }} />
            </Button>
          </div>
        </Before>

        <Response>
          {previsao ? (
            <Container>
              <ResponseTitle>{previsao.weather[0].description}</ResponseTitle>
              <ResponseTemp>
                <Left>
                  <img
                    src={`http://openweathermap.org/img/wn/${previsao.weather[0].icon}.png`}
                    alt="City Weather Icon"
                  />
                  <Temp>
                    <Temp1>{previsao.main.temp + "°c"}</Temp1>
                    <div>Sensação de {previsao.main.feels_like + "°c"}</div>
                  </Temp>
                </Left>
                <Equal>
                  <WiHumidity style={mystyle} />
                  <div>Umidade de {previsao.main.humidity} %</div>
                </Equal>
                <Equal>
                  <WiStrongWind style={mystyle} />
                  <div style={{ marginRight: "0.625rem" }}>
                    Ventos de {previsao.wind.speed} Km/h
                  </div>
                </Equal>
              </ResponseTemp>
            </Container>
          ) : null}
        </Response>
      </Form>
    </Content>
  );
};

export default App;
