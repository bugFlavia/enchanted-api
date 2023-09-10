export default function Register() {
    return (
        <div>
            <form method="post">
                <label>Nome:</label><input type="text" placeholder="Digite seu Nome" name="nome"/>
                <label>E-mail:</label><input type="text" placeholder="Digite seu E-mail" name="email"/>
                <label>Senha:</label><input type="text" placeholder="Digite uma senha" name="senha"/>          
            </form>
        </div>
    );
};