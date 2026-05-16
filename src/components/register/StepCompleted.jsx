import { LoadingButton } from '../ui/LoadingButton/LoadingButton';

import { CheckIcon, MailIcon, ShieldIcon, UserIcon } from '../../utils/icons';


export function StepCompleted({ animation, userName, email }) {
    return (
        <div className={`register-step ${animation}`}>

            <div className="completed-icon">
                <CheckIcon />
            </div>

            <h2>Tudo certo!</h2>
            <p>Conta criada com sucesso!</p>

            <div className="acc-box">
                <div className="acc-row">
                    <div className="acc-icon"><UserIcon /></div>
                    <div>
                        <div className="acc-info">Nome</div>
                        <div className="acc-val">{userName || '—'}</div>
                    </div>
                </div>
                <div className="acc-row">
                    <div className="acc-icon"><MailIcon /></div>
                    <div>
                        <div className="acc-info">E-mail</div>
                        <div className="acc-val">{email || '—'}</div>
                    </div>
                </div>
                <div className="acc-row">
                    <div className="acc-icon"><ShieldIcon /></div>
                    <div>
                        <div className="acc-info">Status</div>
                        <div className="acc-val">Verificado</div>
                    </div>
                </div>
            </div>

            <LoadingButton>Acessar plataforma</LoadingButton>
        </div>
    );
}
