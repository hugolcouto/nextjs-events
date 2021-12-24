import style from './style.module.scss';
import { Button } from 'components/Button';

export const Filter = () => {
	return (
		<form action="" className={style.filter}>
			<div className={style.formContainer}>
				<label htmlFor="">ano</label>
				<select name="" id="" className={style.select}>
					<option>Test</option>
					<option>Test</option>
					<option>Test</option>
					<option>Test</option>
					<option>Test</option>
				</select>
			</div>
			<div className={style.formContainer}>
				<label htmlFor="">Mês</label>
				<select name="" id="" className={style.select}>
					<option>Janeiro</option>
					<option>Fevereiro</option>
				</select>
			</div>
			<Button>Filtrar Eventos</Button>
		</form>
	)
}
