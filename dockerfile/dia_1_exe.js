console.log(`Utilizando Containers - Docker`);

console.log(`// Exercícios 🚀 \\`);

console.log(
  // 1- 🚀 No Docker Hub, utilizando a caixa de busca ("Search for great content"), busque pela imagem da Distribuição Linux Debian.

  `https://hub.docker.com/search?q=debian`
);

console.log(
  // 2- 🚀 Uma vez que encontrar a imagem oficial, acesse-a (clicando em seu card) e verifique na página de detalhes. Confira se existe algum comando para baixar a imagem localmente sem ter que criar um contêiner para isso.

  `https://hub.docker.com/_/debian/tags`
);

console.log(
  // 3- 🚀 Baixe a imagem utilizando a tag: stable-slim, que é uma versão reduzida da distribuição.

  `docker pull debian:testing-slim`
);

console.log(
  // 4- 🚀 Após baixar a imagem para seu computador local, crie e execute um contêiner no modo interativo utilizando essa imagem como referência — não esqueça referenciar a tag.

  `docker container run -it --name container_com_nome debian:stable-slim`
);

console.log(
  // 5- 🚀 No terminal, você deve conseguir rodar o comando 'cat /etc/*-release', que vai retornar os dados da distribuição Debian que está sendo rodada dentro do contêiner.

  `cat /etc/*-release
    PRETTY_NAME="Debian GNU/Linux 11 (bullseye)"
    NAME="Debian GNU/Linux"
    VERSION_ID="11"
    VERSION="11 (bullseye)"
    VERSION_CODENAME=bullseye
    ID=debian
    HOME_URL="https://www.debian.org/"
    SUPPORT_URL="https://www.debian.org/support"
    BUG_REPORT_URL="https://bugs.debian.org/"`
);

console.log(
  // 6- 🚀 Encerre o terminal.

  `exit`
);

console.log(
  // 7- 🚀 Verifique na sua lista de contêiners qual contêiner se refere ao exercício que acabou de praticar.

  `docker ps -l
    CONTAINER ID   IMAGE                COMMAND   CREATED          STATUS                      PORTS     NAMES
    656270c2b02b   debian:stable-slim   "bash"    41 minutes ago   Exited (0) 11 seconds ago             container_com_nome`
);

console.log(
  // 8- 🚀 Inicie o mesmo contêiner novamente, sem criar outro. Valide se ele está ativo na lista de contêiners.

  `Verifica o status:
        docker ps -l
        CONTAINER ID   IMAGE                COMMAND   CREATED          STATUS                       PORTS     NAMES
        894f17a0a549   debian:stable-slim   "bash"    24 seconds ago   Exited (127) 5 seconds ago             constainer_com_nome
    
    Iniciar container:
        docker start 894f17a0a549 || NAMES
        894f17a0a549

    Vefica status:
        docker ps -l
        CONTAINER ID   IMAGE                COMMAND   CREATED         STATUS              PORTS     NAMES
        894f17a0a549   debian:stable-slim   "bash"    5 minutes ago   Up About a minute             constainer_com_nome`
);

console.log(
  // 9- 🚀 Retome o contêiner que foi criado anteriormente neste exercício.

  `docker attach 894f17a0a549`
);

console.log(
  // 10- 🚀 Rode o comando cat /etc/debian_version que deve retornar a versão atual do sistema do contêiner.

  `cat /etc/debian_version
    11.5`
);

// 11- 🚀 Encerre o terminal.
console.log(`exit`);

// 12- 🚀 Remova somente o contêiner criado para esse exercício.
console.log(
  `docker rm 894f17a0a549
    ou
    docker rf -f 894f17a0a549`
);

// 13- [BÔNUS] Crie e rode de modo interativo em modo ‘Cleanup’, a imagem andrius/ascii-patrol.
console.log(
  `Verifica:
        docker container ls -a
        CONTAINER  ID  IMAGE  COMMAND  CREATED  STATU  PORTS  NAMES
    
    Faz o pull do container:
        docker run -it --rm andrius/ascii-patrol
            Unable to find image 'andrius/ascii-patrol:latest' locally
            latest: Pulling from andrius/ascii-patrol
            1eae7a7426b0: Pull complete 
            f1ea7afafcda: Pull complete`
);

// 14- [BÔNUS] **Encerre o contêiner utilizando os botões [ctrl] + [c].
console.log(`[ctrl] + [c]`);

// Recursos
console.log(
  `Recursos:
        Documentação oficial do Docker
            https://docs.docker.com/

        Playground virtual: Play with Docker (PWD)
            https://labs.play-with-docker.com/`
);
