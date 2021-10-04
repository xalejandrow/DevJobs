module.exports = {
    seleccionarSkills : (seleccionadas = [], opciones) => {

        console.log(seleccionadas);
        // console.log(opciones.fn());

        const skills = ['HTML5', 'CSS3', 'CSSGrid', 'Flexbox', 'JavaScript', 'jQuery', 'Node', 'Angular', 'VueJS', 'ReactJS', 'React Hooks', 'Redux', 'Apollo', 'GraphQL', 'TypeScript', 'PHP', 'Laravel', 'Symfony', 'Python', 'Django', 'ORM', 'Sequelize', 'Mongoose', 'SQL', 'MVC', 'SASS', 'WordPress'];

        let html = '';
        skills.forEach(skill => {
            html += `
                <li ${seleccionadas.includes(skill)? 'class="activo"' : ''}>${skill}</li>
            `;
        });

        return opciones.fn().html = html;
    
    },
    tipoContrato: (seleccionado, opciones) => {
        return opciones.fn(this).replace(
            new RegExp(` value="${seleccionado}"`), '$& selected="selected"'
        )
    },
    mostrarAlertas: (errores= {}, alertas) => {
        // console.log(errores);
        // console.log('-----------');
        const categoria = Object.keys(errores);
        // console.log(errores[categoria]);
        let html = '';
        if(categoria.length){
            errores[categoria].forEach(error => {
                html += `<div class="${categoria} alerta">
                    ${error}
               </div>`;
            })
        }

        return alertas.fn().html = html;

        // console.log(html);
        // console.log(categoria);
        // console.log(alertas.fn());

    }
}