
/* Potřebuju aby se mi třídy na FE genrovali
bg-primary-500
hover:bg-primary-600
focus:bg-primary-700
*/

const Button = ({ text, size, outline, bgColor, textColor, white, onClick }) => {

  const btnClass = `block text-center transition rounded-md font-semibold ${size === 'small' ? 'py-3 px-3' : size === 'big' ? 'py-3 px-6 text-xl w-full' : 'py-2 px-6'} ${outline === 'true' ? `border border-primary-800 bg-white hover:bg-primary-50 focus:bg-primary-100` : ''}${white === 'true' ? `bg-white hover:bg-primary-100 focus:bg-primary-100 border border-primary-200 text-${textColor} focus-visible:outline-none` : ''} ${bgColor !== '' ? `bg-${bgColor}-500 hover:bg-${bgColor}-600 focus:bg-${bgColor}-700 text-${textColor} focus-visible:outline-none` : ''} `

  const buttonStyle = {
    WebkitTapHighlightColor: 'transparent', // Odstranění zvýraznění při tapnutí
  };

  return (
    <button className={btnClass} style={buttonStyle} onClick={onClick}>{text}</button>  
  )
}

export default Button