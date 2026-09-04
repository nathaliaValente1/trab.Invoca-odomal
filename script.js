document.addEventListener('DOMContentLoaded', () => {
    // -------------------------------------------------------------
    // 1. Efeito de Luz Vermelha Perseguindo o Mouse
    // -------------------------------------------------------------
    const flashlight = document.createElement('div');
    
    // Estilização dinâmica da aura do mouse
    flashlight.style.position = 'fixed';
    flashlight.style.width = '250px';
    flashlight.style.height = '250px';
    flashlight.style.borderRadius = '50%';
    flashlight.style.background = 'radial-gradient(circle, rgba(230, 0, 0, 0.2) 0%, rgba(139, 0, 0, 0.05) 50%, transparent 70%)';
    flashlight.style.pointerEvents = 'none'; // Não interfere nos cliques
    flashlight.style.transform = 'translate(-50%, -50%)';
    flashlight.style.zIndex = '9999';
    flashlight.style.transition = 'left 0.05s linear, top 0.05s linear';
    
    document.body.appendChild(flashlight);

    // Atualiza a posição da luz conforme o mouse se move
    document.addEventListener('mousemove', (e) => {
        flashlight.style.left = `${e.clientX}px`;
        flashlight.style.top = `${e.clientY}px`;
    });

    // -------------------------------------------------------------
    // 2. Processamento dos Dados do Formulário
    // -------------------------------------------------------------
    const form = document.querySelector('form');

    if (form) {
        form.addEventListener('submit', (e) => {
            // Impede o recarregamento padrão da página
            e.preventDefault();

            // Captura das informações preenchidas
            const nome = document.getElementById('nome').value || 'Anônimo';
            const email = document.getElementById('email').value || 'Não informado';
            const horario = document.getElementById('horario').value || 'Desconhecido';
            const relato = document.getElementById('relato').value || 'Sem detalhes';

            // Mensagem de confirmação estilizada no navegador
            alert(
                `REGISTRO SALVO NOS ARQUIVOS DOS WARREN!\n\n` +
                `Testemunha: ${nome}\n` +
                `Contato: ${email}\n` +
                `Horário do Fenômeno: ${horario}\n` +
                `Relato: "${relato}"\n\n` +
                `Aviso: Caso ouça três batidas na porta, não abra.`
            );

            // Limpa o formulário após o envio
            form.reset();
        });
    }
});