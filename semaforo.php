<?php
class Semaforo{

    private $porta;

    public function __construct($porta="COM3"){
        $this->porta = $porta;
    }

    private function enviar($cmd){

        exec("echo $cmd > {$this->porta}");

    }

    public function ligar(){
        $this->enviar("L");
    }

    public function desligar(){
        $this->enviar("D");
    }


}
?>