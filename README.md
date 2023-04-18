# ConsumoEnergetico

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

----

# Informações da aplicação

Para este projeto foram utilizados alguns valores pré-definidos como a potência dos equipamentos, quantas horas por dia e quantos dias no mês esses equipamntos eram usados. 

**A maioria dos dados referentes a potência dos equipamentos foi tirados do site [Cooperluz](https://www.cooperluz.com.br/tabela-de-consumo#:~:text=Para%20calcular%20o%20consumo%20de,kWh%20do%20equipamento%20por%20dia)**

**Exceto o valor das lâmpadas, que foi retirado do site [Empeltec.Jr](https://empeltecjr.com/como-funciona-uma-lampada-de-led/?gclid=CjwKCAjw3POhBhBQEiwAqTCuBtMYQSYq43Fr-LIyFtJZEZy2z5KBG0B3WvtMHSG2dP5_7J6neUTNqhoCB5gQAvD_BwE)**


### Chuveiro
  Para o consumo do chuveiro o valor foi multiplicado pelo número de pessoas que há na residência
  - Potência: 5000W
  - Uso por dia: 10 minutos
  - Dias por mês: 30 dias

### Televisão
  - Potência: 200W
  - Uso por dia: 5 horas
  - Dias por mês: 30 dias

### Computador 
  - Potência: 350W
  - Uso por dia: 5 horas
  - Dias por mês: 30 dias

### Máquina de lavar roupa
  - Potência: 1500W
  - Uso por dia: 1 horas
  - Dias por mês: 16 dias

### Máquina de secar roupa
  - Potência: 3500W
  - Uso por dia: 1 horas
  - Dias por mês: 4 dias

### Lâmpadas
  Para as lâmpadas, foi levado em consideração que em cada comodo houvesse uma.
  - Potência: 15W
  - Uso por dia: 10 horas
  - Dias por mês: 30 dias
