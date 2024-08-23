import { SectionContainer, CompContainer } from "../styles/Componentes.styles"
import Nada from "../assets/vigia.png"
import SensorGas from "../imgs/SensorDeGas.png"
import Ultra from "../imgs/SensorUltrassonico.png"
import Fio from "../imgs/Fio.png"
import Buzzer from "../imgs/Buzzer.png"
import RTC from "../imgs/RealTimeclock.png"
import Protoboard from "../imgs/Protoboard.png"
import Cam from "../imgs/ESP32.png"
import Board from "../imgs/MiniProtoboard.png"
import Oled from "../imgs/TelaOled.png"
import Cano from "../imgs/CanoPVC.png"
import Servo from "../imgs/ServoMotor.png"
import Arduino from "../imgs/ArduinoNano.png"
import Shield from "../imgs/Shield.png"
import Fonte from "../imgs/Fonte.png"
import Led from "../imgs/Led.png"
import Luz from "../imgs/Luz.png"

export function Componentes() {
  return (
   <CompContainer>
        <h1>Lista de Materias</h1> 
        <SectionContainer >
            <img src={Arduino} alt="" />
            <p>1x - Arduino Nano R3</p>
        </SectionContainer>
        <SectionContainer >
            <img src={Shield} alt="" />
            <p>1x - Shield Expansão De Pinos Para Arduino Nano V3</p>
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
            <img src={Luz} alt="" />
           <p>1x - Módulo Sensor de Luminosidade Luz LDR</p>
        </SectionContainer>
        <SectionContainer >
            <img src={Led} alt="" />
           <p>3x - Led branco</p>
        </SectionContainer>
        <SectionContainer >
            <img src={Fio} alt="" />
            <p>?x - Jumper</p>
        </SectionContainer>
        <SectionContainer >
            <img src={Protoboard} alt="" />
            <p>1x - Protoboard</p>
        </SectionContainer>
        <SectionContainer >
            <img src={Board} alt="" />
            <p>1x - Mini Protoboard</p>
        </SectionContainer>
        <SectionContainer >
            <img src={Cano} alt="" />
            <p>?x - Cano PVC</p>
        </SectionContainer>
        <SectionContainer >
            <img src={Fonte} alt="" />
            <p>1x - Fonte 12v 1a Bivolt</p>
        </SectionContainer>
    </CompContainer>
  )
}
