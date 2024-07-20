import { SectionContainer } from "../styles/Componentes.styles"
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
    <div>
        <h1>Nossa lista de produtos e ferramentas que utilizamos nesse projeto, se dá em uma lista altamente variada com peças cruciais para sua montagem, sendo elas:</h1>
        <SectionContainer >
            <img src={SensorGas} alt="" />
            <p>Sensor de Gás MQ-5 GLP (Gás de Cozinha) e Gás Natural;</p>
        </SectionContainer>
        <SectionContainer >
            <img src={Fio} alt="" />
            <p>Jumper wires (genérico);</p>
        </SectionContainer>
        <SectionContainer >
            <img src={Buzzer} alt="" />
            <p>Buzzer;</p>
        </SectionContainer>
        <SectionContainer >
            <img src={Ultra} alt="" />
            <p>Sensor Ultrassonico  - HC-SR04 (Genérico);</p>
        </SectionContainer>
        <SectionContainer >
            <img src={RTC} alt="" />
            <p>DS3231 RTC Module - Real Time Clock e sensor de Temperatura;</p>
        </SectionContainer>
        <SectionContainer >
            <img src={Camera} alt="" />
            <p>Omnivision OV7670 CMOS I2C VGA Camera Module;</p>
        </SectionContainer>
        <SectionContainer >
            <img src={Wifi} alt="" />
            <p>Módulo WiFi Serial ESP8266 ESP-01;</p>
        </SectionContainer>
        <SectionContainer >
            <img src={Board} alt="" />
            <p>Mini Protoboard;</p>
        </SectionContainer>
        <SectionContainer >
            <img src={Oled} alt="" />
            <p>OLED Screen 128x64 i2c;</p>
        </SectionContainer>
        <SectionContainer >
            <img src={Cano} alt="" />
            <p>Cano PVC;</p>
        </SectionContainer>
        <SectionContainer >
            <img src={Servo} alt="" />
            <p>SG90 Micro-servo motor;</p>
        </SectionContainer>
        <SectionContainer >
            <img src={Arduino} alt="" />
            <p>Arduino Nano R3;</p>
        </SectionContainer>
    </div>
    
  )
}
