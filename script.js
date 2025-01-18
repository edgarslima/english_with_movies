document.addEventListener('DOMContentLoaded', function() {
    fetch('origem/partes/legendas.csv')
        .then(response => response.text())
        .then(data => {
            const lines = data.split('\n');
            const menu = document.getElementById('menu');
            lines.forEach(line => {
                const [fileName, phrase] = line.split(';');
                if (fileName && phrase) {
                    const listItem = document.createElement('li');
                    const link = document.createElement('a');
                    link.href = '#';
                    link.textContent = phrase.trim();
                    link.addEventListener('click', function() {
                        const videoPlayer = document.getElementById('videoPlayer');
                        const videoSource = document.getElementById('videoSource');
                        videoSource.src = `${fileName.trim()}`;
                        videoPlayer.load();
                        videoPlayer.setAttribute('autoplay', 'true');
                        const caption = document.getElementById('caption');
                        caption.textContent = phrase.trim();
                    });
                    listItem.appendChild(link);
                    menu.appendChild(listItem);
                }
            });
        })
        .catch(error => console.error('Erro ao carregar o arquivo CSV:', error));
});
