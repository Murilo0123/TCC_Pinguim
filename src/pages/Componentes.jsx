import { SectionContainer, CompContainer } from "../styles/Componentes.styles"
import Nada from "../assets/vigia.png"
import SensorGas from "../imgs/SensorDeGas.png"
import Ultra from "../imgs/SensorUltrassonico.png"
import Fio from "../imgs/Fio.png"
import Buzzer from "../imgs/Buzzer.png"
import RTC from "../imgs/RealTimeclock.png"
import Protoboard from "../imgs/Protoboard.png"
import Cam from "../imgs/ESP32.png"
import Papelao from "../imgs/Papelao.png"
import Oled from "../imgs/TelaOled.png"
import Cano from "../imgs/CanoPVC.png"
import Servo from "../imgs/ServoMotor.png"
import Arduino from "../imgs/Arduino.png"
import SensorPir from "../imgs/SensorPir.png"
import Bateria9v from "../imgs/Bateria9v.png"
import Bateria3v from "../imgs/Bateria3v.png"
import ClipConector from "../imgs/ClipConector.png"
import Regulador from "../imgs/Regulador.png"
import Suporte from "../imgs/Suporte.png"

export function Componentes() {
  return (
   <CompContainer>
        <h1>Lista de Materias</h1> 
        <SectionContainer >
            <img src={Arduino} alt="" />
            <p>1x - Arduino Uno com cabo</p>
        </SectionContainer>
        <SectionContainer >
            <img src={SensorPir} alt="" />
            <p>1x - Sensor de Movimento Presença PIR HC-SR501</p>
        </SectionContainer>
        <SectionContainer >
            <img src={Cam} alt="" />
            <p>1x - ESP32-CAM</p>
        </SectionContainer>
        <SectionContainer >
            <img src={Ultra} alt="" />
            <p>1x - Sensor Ultrassonico - HC-SR04 (Genérico)</p>
        </SectionContainer>
        <SectionContainer >
            <img src={Oled} alt="" />
            <p>1x - OLED Screen 128x64 i2c</p>
        </SectionContainer>
        <SectionContainer >
            <img src={RTC} alt="" />
            <p>1x - DS3231 RTC Module - Real Time Clock e sensor de Temperatura</p>
        </SectionContainer>
        <SectionContainer >
            <img src={Servo} alt="" />
            <p>1x - Servo Motor MG996R 180° Tower Pro</p>
        </SectionContainer>
        <SectionContainer >
            <img src={Buzzer} alt="" />
            <p>1x - Módulo Buzzer Passivo 5v</p>
        </SectionContainer>
        <SectionContainer >
            <img src={SensorGas} alt="" />
           <p>1x - Sensor de Gás MQ-5 GLP (Gás de Cozinha) e Gás Natural</p>
        </SectionContainer>
        <SectionContainer >
            <img src={Regulador} alt="" />
           <p>2x - Módulo Regulador de Tensão LM 2596 Ajustável - 3A</p>
        </SectionContainer>
        <SectionContainer >
            <img src={ClipConector} alt="" />
           <p>2x - Clip Conector</p>
        </SectionContainer>
        <SectionContainer >
            <img src={Fio} alt="" />
            <p>50x - Jumper</p>
        </SectionContainer>
        <SectionContainer >
            <img src={Protoboard} alt="" />
            <p>1x - Protoboard</p>
        </SectionContainer>
        <SectionContainer >
            <img src={Papelao} alt="" />
            <p>1x - Papelão</p>
        </SectionContainer>
        <SectionContainer >
            <img src={Cano} alt="" />
            <p>3x - Cano PVC</p>
        </SectionContainer>
        <SectionContainer >
            <img src={Bateria9v} alt="" />
            <p>2x - Bateria 9V - Duracell</p>
        </SectionContainer>
        <SectionContainer >
            <img src={Bateria3v} alt="" />
            <p>1x - Bateria 3V - Duracell</p>
        </SectionContainer>
    </CompContainer>
  )
}
