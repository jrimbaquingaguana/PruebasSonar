-- DATA FROM THE PowerFIT DATABASE

-- Insert in table EMPRESA

INSERT INTO EMPRESA (ID_EMP, NOMBRE_EMP, DIRECCION_EMP, TELEFONO_EMP)
VALUES ('ID_EMPCODEX', 'CodexESPE', 'Quito, San Carlos Bajo', 023525303);

-- Get the ID_EMP of the CodexESPE company

SELECT ID_EMP FROM EMPRESA WHERE NOMBRE_EMP = 'CodexESPE';


-- Insert in table ADMINISTRADOR

INSERT INTO ADMINISTRADOR (ID_ADMIN, ID_EMP, NOMBRE_ADMIN, APELLIDO_ADMIN, CORREO_ADMIN, CONTRASENA_ADMIN)
VALUES 
   ('ID_ADMIN_1', 'ID_EMPCODEX', 'Dalton', 'Arevalo', 'djarevalo3@espe.edu.ec', 'Contraseña1'),
   ('ID_ADMIN_2', 'ID_EMPCODEX', 'Leonardo', 'Sandoval', 'lssandoval@espe.edu.ec', 'Contraseña2'),
   ('ID_ADMIN_3', 'ID_EMPCODEX', 'Hamilton', 'Perez', 'hdperez@espe.edu.ec', 'Contraseña3'),
   ('ID_ADMIN_4', 'ID_EMPCODEX', 'Martin', 'Medina', 'mamedina13@espe.edu.ec', 'Contraseña4');

-- Generate data for 20 users

INSERT INTO USUARIO (ID_USER, ID_EMP, ID_ADMIN, NOMBRE_USER, APELLIDO_USER, CORREO_USER, CONTRASENA_USER, FECHA_NACIMIENTO_USER, GENERO_USER)
VALUES
('ID_USER_1', 'ID_EMPCODEX', 'ID_ADMIN_1', 'Pedro', 'Garcia', 'pegarcia@espe.edu.ec', 'Contraseña1', '1986-03-17', 'Masculino'),
('ID_USER_2', 'ID_EMPCODEX', 'ID_ADMIN_2', 'Luis', 'Hernandez', 'luhernandez@espe.edu.ec', 'Contraseña2', '1992-07-05', 'Masculino'),
('ID_USER_3', 'ID_EMPCODEX', 'ID_ADMIN_3', 'Alejandro', 'Rodriguez', 'alrodriguez@espe.edu.ec', 'Contraseña3', '1997-11-28', 'Masculino'),
('ID_USER_4', 'ID_EMPCODEX', 'ID_ADMIN_4', 'Juan', 'Martinez', 'jumartinez@espe.edu.ec', 'Contraseña4', '1990-04-12', 'Masculino'),
('ID_USER_5', 'ID_EMPCODEX', 'ID_ADMIN_1', 'Carlos', 'Lopez', 'calopez@espe.edu.ec', 'Contraseña5', '1988-09-09', 'Masculino'),
('ID_USER_6', 'ID_EMPCODEX', 'ID_ADMIN_2', 'Jose', 'Gonzalez', 'jogonzalez@espe.edu.ec', 'Contraseña6', '1994-05-22', 'Masculino'),
('ID_USER_7', 'ID_EMPCODEX', 'ID_ADMIN_3', 'Manuel', 'Ramirez', 'maremirez@espe.edu.ec', 'Contraseña7', '1993-12-08', 'Masculino'),
('ID_USER_8', 'ID_EMPCODEX', 'ID_ADMIN_4', 'Francisco', 'Torres', 'fratorres@espe.edu.ec', 'Contraseña8', '1987-08-16', 'Masculino'),
('ID_USER_9', 'ID_EMPCODEX', 'ID_ADMIN_1', 'Miguel', 'Castro', 'micastro@espe.edu.ec', 'Contraseña9', '1996-02-03', 'Masculino'),
('ID_USER_10', 'ID_EMPCODEX', 'ID_ADMIN_2', 'Javier', 'Herrera', 'jaherrera@espe.edu.ec', 'Contraseña10', '1998-10-21', 'Masculino'),
('ID_USER_11', 'ID_EMPCODEX', 'ID_ADMIN_3', 'Antonio', 'Vargas', 'anvargas@espe.edu.ec', 'Contraseña11', '1989-06-14', 'Masculino'),
('ID_USER_12', 'ID_EMPCODEX', 'ID_ADMIN_4', 'Rafael', 'Jimenez', 'rajimenez@espe.edu.ec', 'Contraseña12', '1991-01-27', 'Masculino'),
('ID_USER_13', 'ID_EMPCODEX', 'ID_ADMIN_1', 'Eduardo', 'Morales', 'edmorales@espe.edu.ec', 'Contraseña13', '1995-12-10', 'Masculino'),
('ID_USER_14', 'ID_EMPCODEX', 'ID_ADMIN_2', 'Andres', 'Silva', 'ansilva@espe.edu.ec', 'Contraseña14', '1997-03-04', 'Masculino'),
('ID_USER_15', 'ID_EMPCODEX', 'ID_ADMIN_3', 'Maria', 'Fernandez', 'mafernandez@espe.edu.ec', 'Contraseña15', '1986-09-19', 'Femenino'),
('ID_USER_16', 'ID_EMPCODEX', 'ID_ADMIN_4', 'Ana', 'Gomez', 'angomez@espe.edu.ec', 'Contraseña16', '1992-08-07', 'Femenino'),
('ID_USER_17', 'ID_EMPCODEX', 'ID_ADMIN_1', 'Laura', 'Perez', 'laperez@espe.edu.ec', 'Contraseña17', '1987-04-23', 'Femenino'),
('ID_USER_18', 'ID_EMPCODEX', 'ID_ADMIN_2', 'Carmen', 'Morales', 'camorales@espe.edu.ec', 'Contraseña18', '1994-11-11', 'Femenino'),
('ID_USER_19', 'ID_EMPCODEX', 'ID_ADMIN_3', 'Isabel', 'Torres', 'istorres@espe.edu.ec', 'Contraseña19', '1993-07-02', 'Femenino'),
('ID_USER_20', 'ID_EMPCODEX', 'ID_ADMIN_4', 'Patricia', 'Ruiz', 'paruiz@espe.edu.ec', 'Contraseña20', '1999-02-18', 'Femenino');

-- Generate data for 46 activities

INSERT INTO ACTIVIDAD (ID_ACTI, NOMBRE_ACTI, DESCRIPCION_ACTI, TIEMPO_ACTI, CAL_QUEMADAS_ACTI, PUNTOS_OT_ACTI)
VALUES
('ACTI_1', 'Caminata', 'Actividad de caminata a ritmo moderado', '00:30:00', 2500.50, 5),
('ACTI_2', 'Caminata Rápida', 'Actividad de caminata a ritmo rápido', '00:25:00', 2100.75, 7),
('ACTI_3', 'Trote', 'Actividad de trote a ritmo constante', '00:20:00', 1670.00, 10),
('ACTI_4', 'Correr', 'Actividad de carrera continua', '00:18:00', 1500.25, 15),
('ACTI_5', 'Caminata', 'Actividad de caminata a ritmo moderado', '00:40:00', 3350.50, 5),
('ACTI_6', 'Caminata Rápida', 'Actividad de caminata a ritmo rápido', '00:35:00', 2930.75, 7),
('ACTI_7', 'Trote', 'Actividad de trote a ritmo constante', '00:30:00', 2500.00, 10),
('ACTI_8', 'Correr', 'Actividad de carrera continua', '00:28:00', 2320.25, 15),
('ACTI_9', 'Caminata', 'Actividad de caminata a ritmo moderado', '00:20:00', 1670.50, 5),
('ACTI_10', 'Caminata Rápida', 'Actividad de caminata a ritmo rápido', '00:15:00', 1250.75, 7),
('ACTI_11', 'Trote', 'Actividad de trote a ritmo constante', '00:10:00', 830.00, 10),
('ACTI_12', 'Correr', 'Actividad de carrera continua', '00:08:00', 670.25, 15),
('ACTI_13', 'Caminata', 'Actividad de caminata a ritmo moderado', '00:35:00', 2930.50, 5),
('ACTI_14', 'Caminata Rápida', 'Actividad de caminata a ritmo rápido', '00:30:00', 2500.75, 7),
('ACTI_15', 'Trote', 'Actividad de trote a ritmo constante', '00:25:00', 2100.00, 10),
('ACTI_16', 'Correr', 'Actividad de carrera continua', '00:23:00', 1920.25, 15),
('ACTI_17', 'Caminata', 'Actividad de caminata a ritmo moderado', '00:15:00', 1250.50, 5),
('ACTI_18', 'Caminata Rápida', 'Actividad de caminata a ritmo rápido', '00:10:00', 830.75, 7),
('ACTI_19', 'Trote', 'Actividad de trote a ritmo constante', '00:08:00', 670.00, 10),
('ACTI_20', 'Correr', 'Actividad de carrera continua', '00:05:00', 500.25, 15),
('ACTI_21', 'Caminata', 'Actividad de caminata a ritmo moderado', '00:35:00', 2930.50, 5),
('ACTI_22', 'Caminata Rápida', 'Actividad de caminata a ritmo rápido', '00:30:00', 2500.75, 7),
('ACTI_23', 'Trote', 'Actividad de trote a ritmo constante', '00:25:00', 2100.00, 10),
('ACTI_24', 'Correr', 'Actividad de carrera continua', '00:23:00', 1920.25, 15),
('ACTI_25', 'Caminata', 'Actividad de caminata a ritmo moderado', '00:15:00', 1250.50, 5),
('ACTI_26', 'Caminata Rápida', 'Actividad de caminata a ritmo rápido', '00:10:00', 830.75, 7),
('ACTI_27', 'Trote', 'Actividad de trote a ritmo constante', '00:08:00', 670.00, 10),
('ACTI_28', 'Correr', 'Actividad de carrera continua', '00:05:00', 500.25, 15),
('ACTI_29', 'Caminata', 'Actividad de caminata a ritmo moderado', '00:30:00', 2500.50, 5),
('ACTI_30', 'Caminata Rápida', 'Actividad de caminata a ritmo rápido', '00:25:00', 2100.75, 7),
('ACTI_31', 'Trote', 'Actividad de trote a ritmo constante', '00:20:00', 1670.00, 10),
('ACTI_32', 'Correr', 'Actividad de carrera continua', '00:18:00', 1500.25, 15),
('ACTI_33', 'Caminata', 'Actividad de caminata a ritmo moderado', '00:40:00', 3350.50, 5),
('ACTI_34', 'Caminata Rápida', 'Actividad de caminata a ritmo rápido', '00:35:00', 2930.75, 7),
('ACTI_35', 'Trote', 'Actividad de trote a ritmo constante', '00:30:00', 2500.00, 10),
('ACTI_36', 'Correr', 'Actividad de carrera continua', '00:28:00', 2320.25, 15),
('ACTI_37', 'Caminata', 'Actividad de caminata a ritmo moderado', '00:20:00', 1670.50, 5),
('ACTI_38', 'Caminata Rápida', 'Actividad de caminata a ritmo rápido', '00:15:00', 1250.75, 7),
('ACTI_39', 'Trote', 'Actividad de trote a ritmo constante', '00:10:00', 830.00, 10),
('ACTI_40', 'Correr', 'Actividad de carrera continua', '00:08:00', 670.25, 15),
('ACTI_41', 'Caminata', 'Actividad de caminata a ritmo moderado', '00:35:00', 2930.50, 5),
('ACTI_42', 'Caminata Rápida', 'Actividad de caminata a ritmo rápido', '00:30:00', 2500.75, 7),
('ACTI_43', 'Trote', 'Actividad de trote a ritmo constante', '00:25:00', 2100.00, 10),
('ACTI_44', 'Correr', 'Actividad de carrera continua', '00:23:00', 1920.25, 15),
('ACTI_45', 'Caminata', 'Actividad de caminata a ritmo moderado', '00:15:00', 1250.50, 5),
('ACTI_46', 'Caminata Rápida', 'Actividad de caminata a ritmo rápido', '00:10:00', 830.75, 7);






