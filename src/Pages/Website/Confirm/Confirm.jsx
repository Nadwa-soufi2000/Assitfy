import './Confirm.css'
import { easeOut, motion} from 'framer-motion'
export default function Confirm()
{
    return(
        <motion.div 
         className='parent-confirm'
         initial={{x:'100vw'}}
         animate={{x:0}}
         transition={{duration:1.2,  ease: [0.22, 1, 0.36, 1]}}
         exit={{x:'100vw'}}
        >
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
                        <motion.button initial={{opacity:0}} animate={{opacity:1}} transition={{duration:3 , ease:easeOut}} className='bb1'>تأكيد</motion.button>
                        <div className='secoP'>إذا لم يصلك الرمز يمكنك إعادة المحاولة بعد</div>
                        <motion.button initial={{opacity:0}} animate={{opacity:1}} transition={{duration:3 , ease:easeOut}} className='bb2'>إعادة الإرسال</motion.button>
                </form>
            </div>
        </motion.div>
    )
}