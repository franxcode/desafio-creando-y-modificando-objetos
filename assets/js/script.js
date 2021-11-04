// Mostrar todos los pacientes con sus datos personales.
// Hacer un metodo que permita buscar a un paciente por su nombre y retornar sus datos personales.
// Proteger los datos con getters y setters.
// Crear codigo usando ES5. OK
// Crear una funcion constructora para cada objeto. OK
// Implementar metodos getters y setters para poder acceder y modificar los datos de los pacientes. OK
// Crear un metodo mediante la propiedad prototype que permita buscar los datos de los usuarios por nombre y otro metodo que permita mostrar todos los datos de los usuarios registrados.
// Instanciar cada objeto utilizando la instruccion new.

// Funcion Constructora Consultorio
function Consultorio(nombre, paciente) {
	var _nombre = nombre;
	var _paciente = paciente || [];

	Object.defineProperty(this, "_getNombre", {
		get: function () {
			return _nombre;
		},
	});
	Object.defineProperty(this, "_setNombre", {
		set: function (nombre) {
			_nombre = nombre;
		},
	});
	Object.defineProperty(this, "_getPaciente", {
		get: function () {
			return _paciente;
		},
	});
	Object.defineProperty(this, "_setPaciente", {
		set: function (paciente) {
			_paciente = paciente;
		},
	});
}
// Funcion Constructora Paciente
function Paciente(nombre, edad, rut, diagnostico) {
	var _nombre = nombre;
	var _edad = edad;
	var _rut = rut;
	var _diagnostico = diagnostico || [];

	Object.defineProperty(this, "_getNombre", {
		get: function () {
			return _nombre;
		},
	});
	Object.defineProperty(this, "_setNombre", {
		set: function (nombre) {
			_nombre = nombre;
		},
	});
	Object.defineProperty(this, "_getEdad", {
		get: function () {
			return _edad;
		},
	});
	Object.defineProperty(this, "_setEdad", {
		set: function (edad) {
			_edad = edad;
		},
	});
	Object.defineProperty(this, "_getRut", {
		get: function () {
			return _rut;
		},
	});
	Object.defineProperty(this, "_setRut", {
		set: function (rut) {
			_rut = rut;
		},
	});
	Object.defineProperty(this, "_getDiagnostico", {
		get: function () {
			return _diagnostico;
		},
	});
	Object.defineProperty(this, "_setDiagnostico", {
		set: function (diagnostico) {
			_diagnostico = diagnostico;
		},
	});
}
// Metodos get y set funcion constructora Consultorio
Consultorio.prototype.getNombre = function () {
	return this._getNombre;
};
Consultorio.prototype.setNombre = function (nombre) {
	this._setNombre = nombre;
};
Consultorio.prototype.getPaciente = function () {
	return this._getPaciente;
};
Consultorio.prototype.setPaciente = function (paciente) {
	this._setPaciente = paciente;
};

// Metodos get y set Funcion constructora Paciente
Paciente.prototype.getNombre = function () {
	return this._getNombre;
};
Paciente.prototype.setNombre = function (nombre) {
	this._setNombre = nombre;
};
Paciente.prototype.getEdad = function () {
	return this._getEdad;
};
Paciente.prototype.setEdad = function (edad) {
	this._setEdad = edad;
};
Paciente.prototype.getRut = function () {
	return this._getRut;
};
Paciente.prototype.setRut = function (rut) {
	this._setRut = rut;
};
Paciente.prototype.getDiagnostico = function () {
	return this._getDiagnostico;
};
Paciente.prototype.setDiagnostico = function (diagnostico) {
	this._setDiagnostico = diagnostico;
};
// Instanciando pacientes
var pacienteUno = new Paciente("Juan", 30, "12345678-9", ["Diagnostico A", "Diagnostico A1"]);
var pacienteDos = new Paciente("Carlos", 27, "234567890-1", ["Diagnostico B"]);
var pacienteTres = new Paciente("Karla", 17, "345678901-2", ["Diagnostico C"]);
var pacienteCuatro = new Paciente("Juan", 17, "456789012-3", ["Diagnostico D", "Diagnostico D1", "Diagnostico D2"]);
var pacienteCinco = new Paciente("Juan", 23, "567890123-4", ["Diagnostico E", "Diagnostico E1", "Diagnostico E2"]);

// Instanciando consultorio
var consultorioUno = new Consultorio("Ñuñoa", [pacienteUno, pacienteDos, pacienteTres, pacienteCuatro, pacienteCinco]);
// console.log(consultorioUno.getPaciente());
// console.log(pacienteUno.getNombre());

// Metodo mostrar todos los datos de los usuarios registrados.
Consultorio.prototype.mostrarTodosLosPacientes = function () {
	this._getPaciente.map((paciente) => {
		console.log("Nombre: " + paciente._getNombre);
		console.log("Edad: " + paciente._getEdad);
		console.log("Rut: " + paciente._getRut);
		console.log("Diagnostico: " + paciente._getDiagnostico);
		console.log("****************************************");
	});
};
consultorioUno.mostrarTodosLosPacientes();

// Metodo buscar por nombre y mostrar datos personales.

Consultorio.prototype.filtarPacientePorNombre = function (nombre) {
	this._getPaciente
		.filter((paciente) => paciente._getNombre == nombre)
		.map((paciente) => {
			console.log("Nombre: " + paciente._getNombre);
			console.log("Edad: " + paciente._getEdad);
			console.log("Rut: " + paciente._getRut);
			console.log("Diagnostico: " + paciente._getDiagnostico);
			console.log("****************************************");
		});
};

consultorioUno.filtarPacientePorNombre("Juan");

// Bonus: Mostrar todo en el HTML + interaccion con el DOM

function tableShowPatientInformation(array) {
	let genericHeaderText = `
        <tr class="text-center">
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Edad</th>
            <th scope="col">Rut</th>
            <th scope="col">Diagnostico</th>
        </tr>`;
	for (let i = 0; i < array.length; i++) {
		genericHeaderText += `
        <tr class="text-center">
            <td>${[i + 1]}</td>
            <td>${array[i]._getNombre}</td>
            <td>${array[i]._getEdad}</td>
            <td>${array[i]._getRut}</td>
            <td>${array[i]._getDiagnostico}</td>
        </tr>`;
	}
	document.querySelector(".tableShowAllPatientsInformation").innerHTML = genericHeaderText;
}
tableShowPatientInformation(consultorioUno._getPaciente);

let search = document.querySelector("#search");

search.addEventListener("click", (e) => {
	e.preventDefault();
	let patientName = document.querySelector("#patientName").value;
	let genericHeaderText = `
    <tr class="text-center">
        <th scope="col">#</th>
        <th scope="col">Nombre</th>
        <th scope="col">Edad</th>
        <th scope="col">Rut</th>
        <th scope="col">Diagnostico</th>
    </tr>`;
	let patientFiltered = consultorioUno._getPaciente.filter((paciente) => paciente._getNombre == patientName);
	for (let i = 0; i < patientFiltered.length; i++) {
		genericHeaderText += `
            <tr class="text-center">
                <td>${[i + 1]}</td>
                <td>${patientFiltered[i]._getNombre}</td>
                <td>${patientFiltered[i]._getEdad}</td>
                <td>${patientFiltered[i]._getRut}</td>
                <td>${patientFiltered[i]._getDiagnostico}</td>
            </tr>`;
	}
	document.querySelector(".tableSearchResult").innerHTML = genericHeaderText;
});

let clean = document.querySelector("#clean");
clean.addEventListener("click", (e) => {
	e.preventDefault();
	$(".tableSearchResult").empty();
});
