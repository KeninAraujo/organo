import './Rodape.css';

const Rodape = () => {
    return (
        <footer className='rodape'>
            <div className='links'>
                <a href='https://www.facebook.com/'>
                    <img src='imagens/fb.png' alt='Facebook' />
                </a>
                <a href='https://www.instagram.com/'>
                    <img src='imagens/ig.png' alt='Instagram' />
                </a>
                <a href='https://x.com/?lang=pt-br'>
                    <img src='imagens/tw.png' alt='Twitter' />
                </a>
            </div>

            <img src="imagens/logo.png" alt='logo'></img>

            <p>Desenvolvido por Kenin em parceria com Alura</p>
        </footer>
    );
}

export default Rodape;
