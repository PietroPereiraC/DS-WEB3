<?php
class semaforo{

    public $modo;
    public $porta;
    public $velocidade;

    public function __construct($modo){
        $this->modo = $modo;
        $this->porta = "COM3";

        if($this->modo == "lento"){
            $this->velocidade = 1;
        } elseif ($this->modo == "medio"){
            $this->velocidade = 2;
        } elseif ($this->modo == "rapido"){
            $this->velocidade = 3;
        }
        
    }

    public function enviarComando(){

        exec("echo {$this->velocidade} > {$this->porta}");

    }

}

$modo = $_GET['modo'];

$semaforo = new semaforo($modo);

$semaforo->enviarComando();
?>