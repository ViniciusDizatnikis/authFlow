import './LoadingButton.css';

/**
 * LoadingButton
 *
 * Props:
 *   - children    : texto do botão
 *   - isLoading   : boolean — exibe o spinner e desabilita o botão
 *   - onClick     : handler do clique
 *   - className   : classes extras (opcional)
 *   - type        : "button" | "submit" (padrão: "button")
 *   - disabled    : desabilita sem mostrar spinner
 */
export function LoadingButton({
    children,
    isLoading = false,
    onClick,
    className = '',
    type = 'button',
    disabled = false,
}) {
    return (
        <button
            type={type}
            className={`loading-btn ${isLoading ? 'loading-btn--loading' : ''} ${className}`}
            onClick={onClick}
            disabled={isLoading || disabled}
        >
            <span className="loading-btn__text">{children}</span>
            <span className="loading-btn__spinner" aria-hidden="true" />
        </button>
    );
}
