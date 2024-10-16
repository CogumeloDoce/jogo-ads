// Variáveis globais
const usuarios = 100; // Número total de usuários
let visualizacoesPorUsuario = 0; // Inicializa contagem de visualizações
const visualizacoesPorUsuarioMax = 10; // Anúncios vistos por usuário por dia
const cpm = 5; // Custo por Mil Impressões (CPM) em USD
const percentualRecompensa = 0.01; // 1% do lucro é distribuído
const tempoEntreAnuncios = 90; // Tempo em segundos para exibir um novo anúncio
let proximoAnuncio = tempoEntreAnuncios; // Temporizador para próximo anúncio

// Função para calcular lucros e recompensas
function calcularLucros() {
    const visualizacoesTotais = usuarios * visualizacoesPorUsuario; // Total de visualizações
    const lucroBrutoDiario = (visualizacoesTotais / 1000) * cpm; // Lucro bruto
    const recompensaTotal = lucroBrutoDiario * percentualRecompensa; // Recompensa total
    const lucroLiquido = lucroBrutoDiario - recompensaTotal; // Lucro líquido para o dono do jogo

    return {
        lucroBrutoDiario,
        recompensaTotal,
        lucroLiquido
    };
}

// Função para exibir um anúncio (simulação)
function exibirAnuncio() {
    if (visualizacoesPorUsuario < visualizacoesPorUsuarioMax) {
        alert("Exibindo anúncio..."); // Simulação de exibição de anúncio
        visualizacoesPorUsuario += 1; // Incrementa contagem de visualizações
    } else {
        alert("Limite de anúncios alcançado para hoje.");
    }
}

// Início do jogo
document.getElementById('iniciarJogo').addEventListener('click', function() {
    visualizacoesPorUsuario = 0; // Reinicia contagem
    setInterval(function() {
        exibirAnuncio(); // Exibe um anúncio
        const resultados = calcularLucros();
        document.getElementById('lucroBruto').textContent = "Lucro Bruto Diário: $" + resultados.lucroBrutoDiario.toFixed(2);
        document.getElementById('recompensaUsuarios').textContent = "Recompensa Total para Usuários: $" + resultados.recompensaTotal.toFixed(2);
        document.getElementById('lucroLiquido').textContent = "Lucro Líquido Diário: $" + resultados.lucroLiquido.toFixed(2);
    }, tempoEntreAnuncios * 1000); // Exibe anúncio a cada 90 segundos
});
