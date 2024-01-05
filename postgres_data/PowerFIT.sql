/*==============================================================*/
/* DBMS name:      PostgreSQL 8                                 */
/* Created on:     15/6/2023 20:52:08                           */
/*==============================================================*/


/*==============================================================*/
/* Table: ACTIVIDAD                                             */
/*==============================================================*/
create table ACTIVIDAD (
   ID_ACTI              CHAR(11)             not null,
   NOMBRE_ACTI          VARCHAR(25)          not null,
   DESCRIPCION_ACTI     TEXT                 not null,
   TIEMPO_ACTI          TIME                 not null,
   CAL_QUEMADAS_ACTI    DECIMAL(7,2)         not null,
   PUNTOS_OT_ACTI       NUMERIC(3)           null,
   constraint PK_ACTIVIDAD primary key (ID_ACTI)
);

/*==============================================================*/
/* Index: ACTIVIDAD_PK                                          */
/*==============================================================*/
create unique index ACTIVIDAD_PK on ACTIVIDAD (
ID_ACTI
);


/*==============================================================*/
/* Table: ADMINISTRADOR                                         */
/*==============================================================*/
create table ADMINISTRADOR (
   ID_ADMIN             CHAR(11)             not null,
   ID_EMP               CHAR(11)             not null,
   NOMBRE_ADMIN         VARCHAR(25)          not null,
   APELLIDO_ADMIN       VARCHAR(25)          not null,
   CORREO_ADMIN         VARCHAR(50)          not null,
   CONTRASENA_ADMIN     CHAR(25)             not null,
   constraint PK_ADMINISTRADOR primary key (ID_ADMIN)
);

/*==============================================================*/
/* Index: ADMINISTRADOR_PK                                      */
/*==============================================================*/
create unique index ADMINISTRADOR_PK on ADMINISTRADOR (
ID_ADMIN
);

/*==============================================================*/
/* Index: EMPLEA_FK                                             */
/*==============================================================*/
create  index EMPLEA_FK on ADMINISTRADOR (
ID_EMP
);

/*==============================================================*/
/* Table: EMPRESA                                               */
/*==============================================================*/
create table EMPRESA (
   ID_EMP               CHAR(11)             not null,
   NOMBRE_EMP           VARCHAR(25)          not null,
   DIRECCION_EMP        VARCHAR(50)          not null,
   TELEFONO_EMP         NUMERIC              not null,
   constraint PK_EMPRESA primary key (ID_EMP)
);

/*==============================================================*/
/* Index: EMPRESA_PK                                            */
/*==============================================================*/
create unique index EMPRESA_PK on EMPRESA (
ID_EMP
);

/*==============================================================*/
/* Table: PREMIO                                                */
/*==============================================================*/
create table PREMIO (
   ID_PRE               CHAR(11)             not null,
   NOMBRE_PRE           VARCHAR(25)          not null,
   DESCRIPCION_PRE      TEXT                 not null,
   PUNTOS_RQ_PRE        NUMERIC(3)           not null,
   constraint PK_PREMIO primary key (ID_PRE)
);

/*==============================================================*/
/* Index: PREMIO_PK                                             */
/*==============================================================*/
create unique index PREMIO_PK on PREMIO (
ID_PRE
);


/*==============================================================*/
/* Table: REGISTRO                                              */
/*==============================================================*/
create table REGISTRO (
   ID_REG               CHAR(11)             not null,
   ID_ACTI              CHAR(11)             not null,
   ID_USER              CHAR(11)             not null,
   FECHA_HORA_REG       DATE                 not null,
   TIPO_ACT_REG         TEXT                 not null,
   TIEMPO_REG           TIME                 not null,
   DISTANCIA_REG        DECIMAL(7,2)         not null,
   constraint PK_REGISTRO primary key (ID_REG)
);

/*==============================================================*/
/* Index: REGISTRO_PK                                           */
/*==============================================================*/
create unique index REGISTRO_PK on REGISTRO (
ID_REG
);

/*==============================================================*/
/* Index: TIENE_FK                                              */
/*==============================================================*/
create  index TIENE_FK on REGISTRO (
ID_ACTI
);

/*==============================================================*/
/* Index: OBTIENE_FK                                            */
/*==============================================================*/
create  index OBTIENE_FK on REGISTRO (
ID_USER
);

/*==============================================================*/
/* Table: USUARIO                                               */
/*==============================================================*/
create table USUARIO (
   ID_USER              CHAR(11)             not null,
   ID_EMP               CHAR(11)             not null,
   ID_ADMIN             CHAR(11)             not null,
   NOMBRE_USER          VARCHAR(25)          not null,
   APELLIDO_USER        VARCHAR(25)          not null,
   CORREO_USER          VARCHAR(50)          not null,
   CONTRASENA_USER      CHAR(25)             not null,
   FECHA_NACIMIENTO_USER DATE                 not null,
   GENERO_USER          VARCHAR(20)          not null,
   constraint PK_USUARIO primary key (ID_USER)
);

/*==============================================================*/
/* Index: USUARIO_PK                                            */
/*==============================================================*/
create unique index USUARIO_PK on USUARIO (
ID_USER
);

/*==============================================================*/
/* Index: RECOMPENSA_FK                                         */
/*==============================================================*/
create  index RECOMPENSA_FK on USUARIO (
ID_EMP
);

/*==============================================================*/
/* Index: MANEJA_FK                                             */
/*==============================================================*/
create  index MANEJA_FK on USUARIO (
ID_ADMIN
);

alter table ADMINISTRADOR
   add constraint FK_ADMINIST_EMPLEA_EMPRESA foreign key (ID_EMP)
      references EMPRESA (ID_EMP)
      on delete restrict on update restrict;

alter table REGISTRO
   add constraint FK_REGISTRO_OBTIENE_USUARIO foreign key (ID_USER)
      references USUARIO (ID_USER)
      on delete restrict on update restrict;

alter table REGISTRO
   add constraint FK_REGISTRO_TIENE_ACTIVIDA foreign key (ID_ACTI)
      references ACTIVIDAD (ID_ACTI)
      on delete restrict on update restrict;

alter table USUARIO
   add constraint FK_USUARIO_MANEJA_ADMINIST foreign key (ID_ADMIN)
      references ADMINISTRADOR (ID_ADMIN)
      on delete restrict on update restrict;

alter table USUARIO
   add constraint FK_USUARIO_RECOMPENS_EMPRESA foreign key (ID_EMP)
      references EMPRESA (ID_EMP)
      on delete restrict on update restrict;

