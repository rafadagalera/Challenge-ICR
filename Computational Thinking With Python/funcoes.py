def menu_opcoes():
    print("Escolha uma opção:")
    print("1 - Criar conta")
    print("2 - Fazer login")
    print("3 - Conheça os Amigos da Saúde")
    print("4 - Ajuda")
    print("0 - Sair")
    return int(input("Digite o número da opção desejada: "))

operacoes = []

cadastros = {
    "Nome":[],
    "Email":[],
    "Senha":[],
    "Avatar":[]
}

caractericas_avatar = {
    "Cabelo": "",
    "Rosto": "",
    "Camisa": "",
    "Short": "",
    "Tenis": ""
}

email_logado = []
senha_logada = []

def criar_conta():
    nome = input("Nome")
    email = input("Email")
    senha = input("Senha")
    if email not in cadastros["Email"]: 
        cadastros["Nome"].append(nome)
        cadastros["Email"].append(email)
        cadastros["Senha"].append(senha)
     
    else:
        print("\nEsse email já está cadastrado \nFaça o login para continuar")
    return 

def login():

    login = input("Digite o seu email")
    senha = input("Digite sua senha")
    if login in cadastros["Email"] and senha in cadastros["Senha"]:
        print("Login efetuado com sucesso!")    
        index = cadastros["Email"].index(login)    
        email_logado.append(cadastros["Email"][index])
        senha_logada.append(cadastros["Senha"][index])     
        print(f"Bem vindo {email_logado[0]}!")
    else:
        print("Usuário ou Senha inválido.")
    return  

def logout_paciente():
    print(f"Até mais {email_logado[0]}!")
    email_logado.clear()
    senha_logada.clear()
    return

def amigos_da_saude():
    print("ALjdlkasjdlaksjdoasuhdoasiuhdasdga")
    return

def ajuda():
    print("ajsduisahjdiaoshduias")
    return

def criar_avatar_cabelo():
    print("Escolha uma opção para o cabelo:")
    print("1 - Careca")
    print("2 - Cabelo curto")
    print("3 - Cabelo longo")
    print("0 - Sair")


    while True:
        opcao = int(input("Digite o número da opção desejada:"))
        
        if opcao == 1:
            caractericas_avatar.update({"Cabelo": "Careca"})
            break
        elif opcao == 2:
            caractericas_avatar.update({"Cabelo": "Cabelo curto"})
            break
        elif opcao == 3:
            caractericas_avatar.update({"Cabelo": "Cabelo longo"})
            break
        else:
            print("Opção inválida. Tente novamente.")
            

    return

def criar_avatar_rosto():
    print("Escolha uma opção para o rosto:")
    print("1 - Redondo")
    print("2 - Quadrado")
    print("3 - Oval")
    print("0 - Sair")


    while True:
        opcao = int(input("Digite o número da opção desejada:"))
        
        if opcao == 1:
            caractericas_avatar.update({"Rosto": "Redondo"})
            break
        elif opcao == 2:
            caractericas_avatar.update({"Rosto": "Quadrado"})
            break
        elif opcao == 3:
            caractericas_avatar.update({"Rosto": "Oval"})
            break
        else:
            print("Opção inválida. Tente novamente.")
        
    return

def criar_avatar_camisa():
    print("Escolha uma opção para a camisa:")
    print("1 - Vermelha")
    print("2 - Azul")
    print("3 - Verde")
    print("0 - Sair")


    while True:
        opcao = int(input("Digite o número da opção desejada:"))
        
        if opcao == 1:
            caractericas_avatar.update({"Camisa": "Camisa Vermelha"})
            break
        elif opcao == 2:
            caractericas_avatar.update({"Camisa": "Camisa Azul"})
            break
        elif opcao == 3:
            caractericas_avatar.update({"Camisa": "Camis Verde"})
            break
        else:
            print("Opção inválida. Tente novamente.")

    return

def criar_avatar_short():
    print("Escolha uma opção para o short:")
    print("1 - Short preto")
    print("2 - Short verde")
    print("3 - Short laranja")
    print("0 - Sair")


    while True:
        opcao = int(input("Digite o número da opção desejada:"))
        
        if opcao == 1:
            caractericas_avatar.update({"Short": "Short Preto"})
            break
        elif opcao == 2:
            caractericas_avatar.update({"Short": "Short Verde"})
            break
        elif opcao == 3:
            caractericas_avatar.update({"Short": "Short Laranja"})
            break
        else:
            print("Opção inválida. Tente novamente.")

    return

def criar_avatar_tenis():
    print("Escolha uma opção para o tenis:")
    print("1 - Tenis vermelho")
    print("2 - Tenis verde")
    print("3 - Tenis azul")
    print("0 - Sair")

    while True:
        opcao = int(input("Digite o número da opção desejada: "))

        if opcao == 1:
            caractericas_avatar.update({"Tenis": "Tenis azul"})
            break
        elif opcao == 2:
            caractericas_avatar.update({"Tenis": "Tenis verde"})
            break
        elif opcao == 3:
            caractericas_avatar.update({"Tenis": "Tenis vermelho"})
            break
        else:
            print("Opção inválida. Tente novamente.")
        
    return

def criar_avatar():
    if len(cadastros["Email"]) > len(cadastros["Avatar"]):  
        criar_avatar_cabelo()
        criar_avatar_rosto()
        criar_avatar_camisa()
        criar_avatar_short()
        criar_avatar_tenis()

        cadastros["Avatar"].append(caractericas_avatar)
    else:
        print("Você já possui um avatar cadastrado!")    
    
    return 

def ver_avatar():
    for i in range(len(cadastros["Email"])):
        if cadastros["Email"] == email_logado and cadastros["Senha"] == senha_logada:
            print("Meu avatar:", cadastros["Avatar"][i])
    return

def mudar_avatar():
    for i in range(len(cadastros["Email"])):
        if cadastros["Email"] == email_logado and cadastros["Senha"] == senha_logada:
            criar_avatar_cabelo()
            criar_avatar_rosto()
            criar_avatar_camisa()
            criar_avatar_short()
            criar_avatar_tenis()
                  
            cadastros["Avatar"][i] = caractericas_avatar
    return

def ajuda_paciente():
    print("shiyudgasudgsauiydsgayduias")
    return

def menu_paciente():
    print("Escolha uma opção:")
    print("1 - Criar meu avatar")
    print("2 - Ver meu avatar")
    print("3 - Mudar meu avatar")
    print("4 - Ajuda")
    print("0 - Sair")
    return int(input("Digite o número da opção desejada: "))

def menu():
    while True:
        opcao = menu_opcoes()
        if opcao == 1:
            criar_conta()
            operacoes.append("Conta criada")
        elif opcao == 2:
            login()
            operacoes.append("Login efetuado")
            while True:
                opcao_paciente = menu_paciente()    
                if opcao_paciente == 1:
                        criar_avatar()
                        operacoes.append("Avatar criado")
                elif opcao_paciente == 2:
                        ver_avatar()
                        operacoes.append("Vizualizou o avatar")
                elif opcao_paciente == 3:
                        mudar_avatar()
                        operacoes.append("Mudou o avatar")
                elif opcao_paciente == 4:
                        ajuda_paciente()
                        operacoes.append("Acessou o comando de Ajuda para pacientes logados")
                elif opcao_paciente == 0:
                        logout_paciente()
                        operacoes.append("Logout efetuado")
                        break

        elif opcao == 3:
            amigos_da_saude()
            operacoes.append("Acessou a página Amigos da Saúde")
        elif opcao == 4:
            ajuda()
            operacoes.append("Acessou o comando de Ajuda do menu inicial")
        elif opcao == 0:
            print("Saindo do menu, até mais!")
            operacoes.append("Saiu do programa")
            break   
        else:
            print("Opção inválida. Tente novamente.")
    for item in operacoes:
        print("Operação realizada: ", item)     
    return
              

                  
