
import proj1 from '@images/Franfocus-app.png'
import proj2 from '@images/Franclock.png'
import proj3 from '@images/supermarket-list-app.png'
import proj4 from '@images/Gastos-app.png'


export const spanish = {
  sections: ['Projectos', 'Contacto'],
  carrer: 'Desarollador web Frontend',
  aboutMe: 'Hola, soy un apasionado del desarrollo Frontend y la programación. Amante de React y actualmente estudiante en Ingenieria en Sistemas de Información',
  projects: [

    {
      title: 'Gastos app',
      url:'https://gastosjs.vercel.app/',
      whatis: 'Una app para controlar tus gastos e ingresos',
      description: 'En esta aplicación puedes registrar un ingreso o un gasto y a final de mes podes saber si perdiste o ganaste dinero en función de la información introducida.',
      technologies: ['react', 'javascript'],
      image: proj4,
      code: 'https://github.com/Frankester/gastosjs.git'
    },
    {
      title: 'Franfocus',
      whatis: 'Una aplicación para aumentar tu concentración basada en la técnica pomodoro',
      description: 'En esta aplicación podes añadir una Tarea, seleccionar una Tarea a realizar, añadir algunas notas, eliminar, actualizar, y cambiar el tiempo en el temporizador si quieres desde los Ajustes',
      technologies: ['react', 'typescript'],
      url: 'https://fran-focus.vercel.app/',
      image: proj1,
      code: 'https://github.com/Frankester/Franfocus.git'
    },
    {
      title: 'Franclock',
      whatis: 'Una aplicación con temporizador, alarmas y la hora actual',
      description: 'En esta aplicación podes seleccionar una alarma, configurar el tono, seleccionar los días en que suena, y puedes tomar tu tiempo con un cronómetro y saber qué hora es en tu zona.',
      technologies: ['react', 'javascript', 'react router'],
      url: 'https://franclock.vercel.app/',
      image: proj2,
      code: 'https://github.com/Frankester/franclock.git'
    },
    {
      title: 'Supermarket List',
      whatis: 'Una aplicación de lista de supermercado',
      description: 'En esta aplicación podes guardar tu lista de la compra antes de ir a comprar y ya no vas a tener que memorizarla nunca mas',
      technologies: ['react', 'javascript'],
      url: 'https://supermarket-list-rosy.vercel.app/',
      image: proj3,
      code: 'https://github.com/Frankester/supermarket-list.git'
    }
  ],
  fromSection: {
    emailFiled: {
      name: 'Email',
      example: 'ej.: johndoe@johndoe.org'
    },
    titleFiled: {
      name: 'Título',
      example: 'ej.: Te estamos buscando!!'
    },
    messageFiled: {
      name: 'Mensaje',
      example: 'Mensaje'
    },
    buttonSend: 'Enviar'
  },
  toast: {
    success: 'Email envaido con éxito',
    error: 'Email no se envió, algo salió mal'
  }
}


export const english = {
  sections: ['Projects', 'Contact'],
  carrer: 'Frontend developer',
  aboutMe: 'Hi, I\'m passionate about Frontend development and programming. React lover and currently a student in Systems of information engineering.',
  projects: [
    {
      title: 'Gastos app',
      url:'https://gastosjs.vercel.app/',
      whatis: 'An app to control your expenses and income',
      description: 'In this application you can register an income or an expense and at the end of the month you can know if you lost or gained money based on the information entered.',
      technologies: ['react', 'javascript'],
      image: proj4,
      code: 'https://github.com/Frankester/gastosjs.git'
    },
    {
      title: 'Franfocus',
      whatis: 'An application to increase your concentration based on pomodoro technique',
      description: 'In this app you can add a Task, select a Task to do, add some notes, remove, update, and change the time at the timer if you want from Settings',
      technologies: ['react', 'typescript'],
      url: 'https://fran-focus.vercel.app/',
      image: proj1,
      code: 'https://github.com/Frankester/Franfocus.git'
    },
    {
      title: 'Franclock',
      whatis: 'An application with timer, alarms and the current time',
      description: 'In this application you can select an alarm, set the tone, select the days it sounds, and you can take your time with a stopwatch and know what time it is in your zone.',
      technologies: ['react', 'javascript', 'react router'],
      url: 'https://franclock.vercel.app/',
      image: proj2,
      code: 'https://github.com/Frankester/franclock.git'
    },
    {
      title: 'Supermarket List',
      whatis: 'A supermarket List app',
      description: 'In this application you can save your shopping list before you go shopping and you will never have to memorize it again.',
      technologies: ['react', 'javascript'],
      url: 'https://supermarket-list-rosy.vercel.app/',
      image: proj3,
      code: 'https://github.com/Frankester/supermarket-list.git'
    }
  ],
  fromSection: {
    emailFiled: {
      name: 'Email',
      example: 'eg.: somecorp@corp.org'
    },
    titleFiled: {
      name: 'Title',
      example: 'eg.: we are looking for you!!'
    },
    messageFiled: {
      name: 'Message',
      example: 'Message'
    },
    buttonSend: 'Send'
  },
  toast: {
    success: 'Email sent successfully',
    error: 'Email was not sent, something went wrong'
  }
}
