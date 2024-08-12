import { SectionContainer, CompContainer } from "../styles/Componentes.styles"
import SensorGas from "../imgs/SensorDeGas.png"
import Ultra from "../imgs/SensorUltrassonico.png"
import Fio from "../imgs/Fio.png"
import Buzzer from "../imgs/Buzzer.png"
import RTC from "../imgs/RealTimeclock.png"
import Camera from "../imgs/modulodaCamera.png"
import Wifi from "../imgs/moduloWiFi.png"
import Board from "../imgs/MiniProtoboard.png"
import Oled from "../imgs/TelaOled.png"
import Cano from "../imgs/CanoPVC.png"
import Servo from "../imgs/ServoMotor.png"
import Arduino from "../imgs/ArduinoNano.png"

export function Componentes() {
  return (
   <CompContainer>
        <h1>Lista de Materias</h1>
        <ul>
        <SectionContainer >
            <img src={SensorGas} alt="" />
            <li>Sensor de Gás MQ-5 GLP (Gás de Cozinha) e Gás Natural;</li>
        </SectionContainer>
        <SectionContainer >
            <img src={Fio} alt="" />
            <li>Jumper wires (genérico);</li>
        </SectionContainer>
        <SectionContainer >
            <img src={Buzzer} alt="" />
            <li>Buzzer;</li>
        </SectionContainer>
        <SectionContainer >
            <img src={Ultra} alt="" />
            <li>Sensor Ultrassonico  - HC-SR04 (Genérico);</li>
        </SectionContainer>
        <SectionContainer >
            <img src={RTC} alt="" />
            <li>DS3231 RTC Module - Real Time Clock e sensor de Temperatura;</li>
        </SectionContainer>
        <SectionContainer >
            <img src={Camera} alt="" />
            <li>Omnivision OV7670 CMOS I2C VGA Camera Module;</li>
        </SectionContainer>
        <SectionContainer >
            <img src={Wifi} alt="" />
            <li>Módulo WiFi Serial ESP8266 ESP-01;</li>
        </SectionContainer>
        <SectionContainer >
            <img src={Board} alt="" />
            <li>Mini Protoboard;</li>
        </SectionContainer>
        <SectionContainer >
            <img src={Oled} alt="" />
            <li>OLED Screen 128x64 i2c;</li>
        </SectionContainer>
        <SectionContainer >
            <img src={Cano} alt="" />
            <li>Cano PVC;</li>
        </SectionContainer>
        <SectionContainer >
            <img src={Servo} alt="" />
            <li>SG90 Micro-servo motor;</li>
        </SectionContainer>
        <SectionContainer >
            <img src={Arduino} alt="" />
            <li>Arduino Nano R3.</li>
        </SectionContainer>
        </ul>
    </CompContainer>
    
  )
}
