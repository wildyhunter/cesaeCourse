export interface Course{
    id: number;
    image: string;
    title: string;
    description: string;
}

export const course: Course[] = [
    {
        id: 1, title: "Python [2023] - #01 - Python e PyCharm - Hello World", image: "https://i.ytimg.com/vi/EstoaA5Du8s/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBcOkPP1Rc6OveH_AxU_y3B1hbQzw",
        description: "Curso de Python para iniciantes, cobrindo desde conceitos básicos até tópicos mais avançados, como manipulação de dados e orientação a objetos. Ideal para quem quer aprender a programar de forma prática e objetiva."
    },
    {
        id: 2, title: "ANDROID com KOTLIN 2023 - #01 - Instalação", image: "https://i.ytimg.com/vi/WJ251ZxslQw/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLCYKcjYomgX4WHxJ3IXsKKrpAp6nQ",
        description: "Curso de Kotlin para desenvolvedores, abordando desde a sintaxe básica até conceitos avançados como programação orientada a objetos e desenvolvimento de aplicativos Android. Ideal para quem quer aprender a criar soluções eficientes e modernas com Kotlin."
    },
    {
        id: 3, title: "Curso C# - #01 - Instalação do Visual Studio Community", image: "https://i.ytimg.com/vi/cuoTOmbyam8/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBUvb7ZpfaXq3OX_UoUFsMpEDGGTA",
        description: "Curso de C# para iniciantes e intermediários, cobrindo desde os fundamentos da linguagem até conceitos avançados como LINQ, manipulação de arquivos e desenvolvimento de aplicações com .NET."
    },
    {
        id: 4, title: "Curso Linux 2020 - Zero to Hero - #1 - Introdução", image: "https://i.ytimg.com/vi/GTCOP3u5UNw/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAzS6B1aj_ogw5X9GYZ21XoTQc56g",
        description: "Curso de Linux para iniciantes, abordando comandos básicos, administração de sistema, gerenciamento de arquivos e permissões, além de configuração e automação. Ideal para quem quer aprender a utilizar o Linux."
    },
]