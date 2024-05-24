import './Confirm.css'
export default function Confirm()
{
    return(
        <div className='parent-confirm'>
            <div className='par-con'>
                <form>
                    <h1>...مرحبا بك</h1>
                    <p className='firstP'><span>...@gmail.com</span>لقد تم إرسال رمز تأكيد </p>
                    <div className='list-inputs'>
                        <input type='text' />
                        <input type='text' />
                        <input type='text' />
                        <input type='text' />
                        <input type='text' />
                        <div className='spa'>
                            <span></span>
                        </div>
                    </div>
                        <button className='bb1'>تأكيد</button>
                        <div className='secoP'>إذا لم يصلك الرمز يمكنك إعادة المحاولة بعد</div>
                        <button className='bb2'>إعادة الإرسال</button>
                </form>
            </div>
        </div>
    )
}