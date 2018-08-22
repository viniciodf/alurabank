import { NegociacaoController } from "./controllers/NegociacaoController";

const controller = new NegociacaoController();

//usando JQuery
$('.form').submit(controller.adiciona.bind(controller));
$('#botao-importa').click(controller.importaDados.bind(controller));