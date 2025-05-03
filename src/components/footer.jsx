export default function Footer(){
    return (
        <>
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-mail">
                    <p>Suscríbete para recibir consejos y tácticas para crecer como deseas.</p>
                    <form method="post">
                        <input type="email" name="email-place" placeholder=" correo electronico" />
                        <button type="button">&gt;</button>
                    </form>
                </div>
                <div className="footer-info">
                    
                </div>
            </div>
        </footer>
        </>
    );
}