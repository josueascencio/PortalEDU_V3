namespace portaleducativo.Texts {

    declare namespace Db {

        namespace Administration {

            namespace Language {
                export const Id: string;
                export const LanguageId: string;
                export const LanguageName: string;
            }

            namespace Role {
                export const RoleId: string;
                export const RoleName: string;
            }

            namespace RolePermission {
                export const PermissionKey: string;
                export const RoleId: string;
                export const RolePermissionId: string;
                export const RoleRoleName: string;
            }

            namespace Translation {
                export const CustomText: string;
                export const EntityPlural: string;
                export const Key: string;
                export const OverrideConfirmation: string;
                export const SaveChangesButton: string;
                export const SourceLanguage: string;
                export const SourceText: string;
                export const TargetLanguage: string;
                export const TargetText: string;
            }

            namespace User {
                export const DisplayName: string;
                export const Email: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const LastDirectoryUpdate: string;
                export const Password: string;
                export const PasswordConfirm: string;
                export const PasswordHash: string;
                export const PasswordSalt: string;
                export const Source: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UserId: string;
                export const UserImage: string;
                export const Username: string;
            }

            namespace UserPermission {
                export const Granted: string;
                export const PermissionKey: string;
                export const User: string;
                export const UserId: string;
                export const UserPermissionId: string;
                export const Username: string;
            }

            namespace UserRole {
                export const RoleId: string;
                export const User: string;
                export const UserId: string;
                export const UserRoleId: string;
                export const Username: string;
            }
        }

        namespace Common {

            namespace UserPreference {
                export const Name: string;
                export const PreferenceType: string;
                export const UserId: string;
                export const UserPreferenceId: string;
                export const Value: string;
            }
        }

        namespace PortalEducativo {

            namespace Alumno {
                export const Apellido: string;
                export const Carnet: string;
                export const Direccion: string;
                export const FechaNacimiento: string;
                export const Foto: string;
                export const IdAlumno: string;
                export const IdRolAlumno: string;
                export const IdRolAlumnoDescripcion: string;
                export const IdRolAlumnoNombre: string;
                export const IdUsuarioAlumno: string;
                export const IdUsuarioAlumnoCorreo: string;
                export const IdUsuarioAlumnoNombre: string;
                export const Nombre: string;
                export const Sexo: string;
            }

            namespace AlumnoCurso {
                export const FechaFin: string;
                export const FechaInicio: string;
                export const IdAlumnoCurso: string;
                export const IdAlumnoCursoApellido: string;
                export const IdAlumnoCursoCarnet: string;
                export const IdAlumnoCursoDireccion: string;
                export const IdAlumnoCursoFechaNacimiento: string;
                export const IdAlumnoCursoFoto: string;
                export const IdAlumnoCursoIdRolAlumno: string;
                export const IdAlumnoCursoIdUsuarioAlumno: string;
                export const IdAlumnoCursoNombre: string;
                export const IdAlumnoCursoSexo: string;
                export const IdCursoAlumno: string;
                export const IdCursoAlumnoAviso: string;
                export const IdCursoAlumnoDescripcion: string;
                export const IdCursoAlumnoEstado: string;
                export const IdCursoAlumnoFechaFin: string;
                export const IdCursoAlumnoFechaInicio: string;
                export const IdCursoAlumnoIdAlumnoCurso: string;
                export const IdCursoAlumnoIdDocenteCurso: string;
                export const IdCursoAlumnoImagen: string;
                export const IdCursoAlumnoNombre: string;
            }

            namespace Aula {
                export const IdAlumnoAula: string;
                export const IdAlumnoAulaApellido: string;
                export const IdAlumnoAulaCarnet: string;
                export const IdAlumnoAulaDireccion: string;
                export const IdAlumnoAulaFechaNacimiento: string;
                export const IdAlumnoAulaFoto: string;
                export const IdAlumnoAulaIdRolAlumno: string;
                export const IdAlumnoAulaIdUsuarioAlumno: string;
                export const IdAlumnoAulaNombre: string;
                export const IdAlumnoAulaSexo: string;
                export const IdAula: string;
                export const IdCursoAula: string;
                export const IdCursoAulaAviso: string;
                export const IdCursoAulaDescripcion: string;
                export const IdCursoAulaEstado: string;
                export const IdCursoAulaFechaFin: string;
                export const IdCursoAulaFechaInicio: string;
                export const IdCursoAulaIdAlumnoCurso: string;
                export const IdCursoAulaIdDocenteCurso: string;
                export const IdCursoAulaImagen: string;
                export const IdCursoAulaNombre: string;
                export const IdDocenteAula: string;
                export const IdDocenteAulaApellido: string;
                export const IdDocenteAulaDireccion: string;
                export const IdDocenteAulaFechaNacimeinto: string;
                export const IdDocenteAulaFoto: string;
                export const IdDocenteAulaGradoAcademico: string;
                export const IdDocenteAulaIdCentroEducativoDocente: string;
                export const IdDocenteAulaIdRolDocente: string;
                export const IdDocenteAulaIdUsuarioDocente: string;
                export const IdDocenteAulaNombre: string;
                export const IdDocenteAulaSexo: string;
                export const IdDocenteAulaTelefono: string;
                export const Nombre: string;
                export const Seccion: string;
            }

            namespace CentroEducativo {
                export const Correo: string;
                export const Direccion: string;
                export const Director: string;
                export const IdCentroEducativo: string;
                export const Nombre: string;
                export const Telefono: string;
                export const Tipo: string;
            }

            namespace Curso {
                export const Aviso: string;
                export const Descripcion: string;
                export const Estado: string;
                export const FechaFin: string;
                export const FechaInicio: string;
                export const IdAlumnoCurso: string;
                export const IdAlumnoCursoApellido: string;
                export const IdAlumnoCursoCarnet: string;
                export const IdAlumnoCursoDireccion: string;
                export const IdAlumnoCursoFechaNacimiento: string;
                export const IdAlumnoCursoFoto: string;
                export const IdAlumnoCursoIdRolAlumno: string;
                export const IdAlumnoCursoIdUsuarioAlumno: string;
                export const IdAlumnoCursoNombre: string;
                export const IdAlumnoCursoSexo: string;
                export const IdCurso: string;
                export const IdDocenteCurso: string;
                export const IdDocenteCursoApellido: string;
                export const IdDocenteCursoDireccion: string;
                export const IdDocenteCursoFechaNacimeinto: string;
                export const IdDocenteCursoFoto: string;
                export const IdDocenteCursoGradoAcademico: string;
                export const IdDocenteCursoIdCentroEducativoDocente: string;
                export const IdDocenteCursoIdRolDocente: string;
                export const IdDocenteCursoIdUsuarioDocente: string;
                export const IdDocenteCursoNombre: string;
                export const IdDocenteCursoSexo: string;
                export const IdDocenteCursoTelefono: string;
                export const Imagen: string;
                export const Nombre: string;
            }

            namespace Docente {
                export const Apellido: string;
                export const Direccion: string;
                export const FechaNacimeinto: string;
                export const Foto: string;
                export const GradoAcademico: string;
                export const IdCentroEducativoDocente: string;
                export const IdCentroEducativoDocenteCorreo: string;
                export const IdCentroEducativoDocenteDireccion: string;
                export const IdCentroEducativoDocenteDirector: string;
                export const IdCentroEducativoDocenteNombre: string;
                export const IdCentroEducativoDocenteTelefono: string;
                export const IdCentroEducativoDocenteTipo: string;
                export const IdDocente: string;
                export const IdRolDocente: string;
                export const IdRolDocenteDescripcion: string;
                export const IdRolDocenteNombre: string;
                export const IdUsuarioDocente: string;
                export const IdUsuarioDocenteCorreo: string;
                export const IdUsuarioDocenteNombre: string;
                export const Nombre: string;
                export const Sexo: string;
                export const Telefono: string;
            }

            namespace Tarea {
                export const Comentario: string;
                export const Descripcion: string;
                export const DocumentoAlumno: string;
                export const DocumentoMaestro: string;
                export const FechaCreacion: string;
                export const FechaFinalizacion: string;
                export const IdAlumnoTarea: string;
                export const IdAlumnoTareaApellido: string;
                export const IdAlumnoTareaCarnet: string;
                export const IdAlumnoTareaDireccion: string;
                export const IdAlumnoTareaFechaNacimiento: string;
                export const IdAlumnoTareaFoto: string;
                export const IdAlumnoTareaIdRolAlumno: string;
                export const IdAlumnoTareaIdUsuarioAlumno: string;
                export const IdAlumnoTareaNombre: string;
                export const IdAlumnoTareaSexo: string;
                export const IdTarea: string;
                export const Nombre: string;
                export const Puntuacion: string;
            }
        }
    }

    declare namespace Forms {

        namespace Membership {

            namespace ChangePassword {
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace ForgotPassword {
                export const BackToLogin: string;
                export const FormInfo: string;
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace Login {
                export const FacebookButton: string;
                export const ForgotPassword: string;
                export const FormTitle: string;
                export const GoogleButton: string;
                export const OR: string;
                export const RememberMe: string;
                export const SignInButton: string;
                export const SignUpButton: string;
            }

            namespace ResetPassword {
                export const BackToLogin: string;
                export const EmailSubject: string;
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace SignUp {
                export const AcceptTerms: string;
                export const ActivateEmailSubject: string;
                export const ActivationCompleteMessage: string;
                export const BackToLogin: string;
                export const ConfirmEmail: string;
                export const ConfirmPassword: string;
                export const DisplayName: string;
                export const Email: string;
                export const FormInfo: string;
                export const FormTitle: string;
                export const Password: string;
                export const SubmitButton: string;
                export const Success: string;
            }
        }
    }

    declare namespace Navigation {
        export const LogoutLink: string;
        export const SiteTitle: string;
    }

    declare namespace Site {

        namespace AccessDenied {
            export const ClickToChangeUser: string;
            export const ClickToLogin: string;
            export const LackPermissions: string;
            export const NotLoggedIn: string;
            export const PageTitle: string;
        }

        namespace BasicProgressDialog {
            export const CancelTitle: string;
            export const PleaseWait: string;
        }

        namespace BulkServiceAction {
            export const AllHadErrorsFormat: string;
            export const AllSuccessFormat: string;
            export const ConfirmationFormat: string;
            export const ErrorCount: string;
            export const NothingToProcess: string;
            export const SomeHadErrorsFormat: string;
            export const SuccessCount: string;
        }

        namespace Dashboard {
            export const ContentDescription: string;
        }

        namespace Layout {
            export const FooterCopyright: string;
            export const FooterInfo: string;
            export const FooterRights: string;
            export const GeneralSettings: string;
            export const Language: string;
            export const Theme: string;
            export const ThemeBlack: string;
            export const ThemeBlackLight: string;
            export const ThemeBlue: string;
            export const ThemeBlueLight: string;
            export const ThemeGreen: string;
            export const ThemeGreenLight: string;
            export const ThemePurple: string;
            export const ThemePurpleLight: string;
            export const ThemeRed: string;
            export const ThemeRedLight: string;
            export const ThemeYellow: string;
            export const ThemeYellowLight: string;
        }

        namespace RolePermissionDialog {
            export const DialogTitle: string;
            export const EditButton: string;
            export const SaveSuccess: string;
        }

        namespace UserDialog {
            export const EditPermissionsButton: string;
            export const EditRolesButton: string;
        }

        namespace UserPermissionDialog {
            export const DialogTitle: string;
            export const Grant: string;
            export const Permission: string;
            export const Revoke: string;
            export const SaveSuccess: string;
        }

        namespace UserRoleDialog {
            export const DialogTitle: string;
            export const SaveSuccess: string;
        }

        namespace ValidationError {
            export const Title: string;
        }
    }

    declare namespace Validation {
        export const AuthenticationError: string;
        export const CantFindUserWithEmail: string;
        export const CurrentPasswordMismatch: string;
        export const DeleteForeignKeyError: string;
        export const EmailConfirm: string;
        export const EmailInUse: string;
        export const InvalidActivateToken: string;
        export const InvalidResetToken: string;
        export const MinRequiredPasswordLength: string;
        export const SavePrimaryKeyError: string;
    }

    portaleducativo['Texts'] = Q.proxyTexts(Texts, '', {Db:{Administration:{Language:{Id:1,LanguageId:1,LanguageName:1},Role:{RoleId:1,RoleName:1},RolePermission:{PermissionKey:1,RoleId:1,RolePermissionId:1,RoleRoleName:1},Translation:{CustomText:1,EntityPlural:1,Key:1,OverrideConfirmation:1,SaveChangesButton:1,SourceLanguage:1,SourceText:1,TargetLanguage:1,TargetText:1},User:{DisplayName:1,Email:1,InsertDate:1,InsertUserId:1,IsActive:1,LastDirectoryUpdate:1,Password:1,PasswordConfirm:1,PasswordHash:1,PasswordSalt:1,Source:1,UpdateDate:1,UpdateUserId:1,UserId:1,UserImage:1,Username:1},UserPermission:{Granted:1,PermissionKey:1,User:1,UserId:1,UserPermissionId:1,Username:1},UserRole:{RoleId:1,User:1,UserId:1,UserRoleId:1,Username:1}},Common:{UserPreference:{Name:1,PreferenceType:1,UserId:1,UserPreferenceId:1,Value:1}},PortalEducativo:{Alumno:{Apellido:1,Carnet:1,Direccion:1,FechaNacimiento:1,Foto:1,IdAlumno:1,IdRolAlumno:1,IdRolAlumnoDescripcion:1,IdRolAlumnoNombre:1,IdUsuarioAlumno:1,IdUsuarioAlumnoCorreo:1,IdUsuarioAlumnoNombre:1,Nombre:1,Sexo:1},AlumnoCurso:{FechaFin:1,FechaInicio:1,IdAlumnoCurso:1,IdAlumnoCursoApellido:1,IdAlumnoCursoCarnet:1,IdAlumnoCursoDireccion:1,IdAlumnoCursoFechaNacimiento:1,IdAlumnoCursoFoto:1,IdAlumnoCursoIdRolAlumno:1,IdAlumnoCursoIdUsuarioAlumno:1,IdAlumnoCursoNombre:1,IdAlumnoCursoSexo:1,IdCursoAlumno:1,IdCursoAlumnoAviso:1,IdCursoAlumnoDescripcion:1,IdCursoAlumnoEstado:1,IdCursoAlumnoFechaFin:1,IdCursoAlumnoFechaInicio:1,IdCursoAlumnoIdAlumnoCurso:1,IdCursoAlumnoIdDocenteCurso:1,IdCursoAlumnoImagen:1,IdCursoAlumnoNombre:1},Aula:{IdAlumnoAula:1,IdAlumnoAulaApellido:1,IdAlumnoAulaCarnet:1,IdAlumnoAulaDireccion:1,IdAlumnoAulaFechaNacimiento:1,IdAlumnoAulaFoto:1,IdAlumnoAulaIdRolAlumno:1,IdAlumnoAulaIdUsuarioAlumno:1,IdAlumnoAulaNombre:1,IdAlumnoAulaSexo:1,IdAula:1,IdCursoAula:1,IdCursoAulaAviso:1,IdCursoAulaDescripcion:1,IdCursoAulaEstado:1,IdCursoAulaFechaFin:1,IdCursoAulaFechaInicio:1,IdCursoAulaIdAlumnoCurso:1,IdCursoAulaIdDocenteCurso:1,IdCursoAulaImagen:1,IdCursoAulaNombre:1,IdDocenteAula:1,IdDocenteAulaApellido:1,IdDocenteAulaDireccion:1,IdDocenteAulaFechaNacimeinto:1,IdDocenteAulaFoto:1,IdDocenteAulaGradoAcademico:1,IdDocenteAulaIdCentroEducativoDocente:1,IdDocenteAulaIdRolDocente:1,IdDocenteAulaIdUsuarioDocente:1,IdDocenteAulaNombre:1,IdDocenteAulaSexo:1,IdDocenteAulaTelefono:1,Nombre:1,Seccion:1},CentroEducativo:{Correo:1,Direccion:1,Director:1,IdCentroEducativo:1,Nombre:1,Telefono:1,Tipo:1},Curso:{Aviso:1,Descripcion:1,Estado:1,FechaFin:1,FechaInicio:1,IdAlumnoCurso:1,IdAlumnoCursoApellido:1,IdAlumnoCursoCarnet:1,IdAlumnoCursoDireccion:1,IdAlumnoCursoFechaNacimiento:1,IdAlumnoCursoFoto:1,IdAlumnoCursoIdRolAlumno:1,IdAlumnoCursoIdUsuarioAlumno:1,IdAlumnoCursoNombre:1,IdAlumnoCursoSexo:1,IdCurso:1,IdDocenteCurso:1,IdDocenteCursoApellido:1,IdDocenteCursoDireccion:1,IdDocenteCursoFechaNacimeinto:1,IdDocenteCursoFoto:1,IdDocenteCursoGradoAcademico:1,IdDocenteCursoIdCentroEducativoDocente:1,IdDocenteCursoIdRolDocente:1,IdDocenteCursoIdUsuarioDocente:1,IdDocenteCursoNombre:1,IdDocenteCursoSexo:1,IdDocenteCursoTelefono:1,Imagen:1,Nombre:1},Docente:{Apellido:1,Direccion:1,FechaNacimeinto:1,Foto:1,GradoAcademico:1,IdCentroEducativoDocente:1,IdCentroEducativoDocenteCorreo:1,IdCentroEducativoDocenteDireccion:1,IdCentroEducativoDocenteDirector:1,IdCentroEducativoDocenteNombre:1,IdCentroEducativoDocenteTelefono:1,IdCentroEducativoDocenteTipo:1,IdDocente:1,IdRolDocente:1,IdRolDocenteDescripcion:1,IdRolDocenteNombre:1,IdUsuarioDocente:1,IdUsuarioDocenteCorreo:1,IdUsuarioDocenteNombre:1,Nombre:1,Sexo:1,Telefono:1},Tarea:{Comentario:1,Descripcion:1,DocumentoAlumno:1,DocumentoMaestro:1,FechaCreacion:1,FechaFinalizacion:1,IdAlumnoTarea:1,IdAlumnoTareaApellido:1,IdAlumnoTareaCarnet:1,IdAlumnoTareaDireccion:1,IdAlumnoTareaFechaNacimiento:1,IdAlumnoTareaFoto:1,IdAlumnoTareaIdRolAlumno:1,IdAlumnoTareaIdUsuarioAlumno:1,IdAlumnoTareaNombre:1,IdAlumnoTareaSexo:1,IdTarea:1,Nombre:1,Puntuacion:1}}},Forms:{Membership:{ChangePassword:{FormTitle:1,SubmitButton:1,Success:1},ForgotPassword:{BackToLogin:1,FormInfo:1,FormTitle:1,SubmitButton:1,Success:1},Login:{FacebookButton:1,ForgotPassword:1,FormTitle:1,GoogleButton:1,OR:1,RememberMe:1,SignInButton:1,SignUpButton:1},ResetPassword:{BackToLogin:1,EmailSubject:1,FormTitle:1,SubmitButton:1,Success:1},SignUp:{AcceptTerms:1,ActivateEmailSubject:1,ActivationCompleteMessage:1,BackToLogin:1,ConfirmEmail:1,ConfirmPassword:1,DisplayName:1,Email:1,FormInfo:1,FormTitle:1,Password:1,SubmitButton:1,Success:1}}},Navigation:{LogoutLink:1,SiteTitle:1},Site:{AccessDenied:{ClickToChangeUser:1,ClickToLogin:1,LackPermissions:1,NotLoggedIn:1,PageTitle:1},BasicProgressDialog:{CancelTitle:1,PleaseWait:1},BulkServiceAction:{AllHadErrorsFormat:1,AllSuccessFormat:1,ConfirmationFormat:1,ErrorCount:1,NothingToProcess:1,SomeHadErrorsFormat:1,SuccessCount:1},Dashboard:{ContentDescription:1},Layout:{FooterCopyright:1,FooterInfo:1,FooterRights:1,GeneralSettings:1,Language:1,Theme:1,ThemeBlack:1,ThemeBlackLight:1,ThemeBlue:1,ThemeBlueLight:1,ThemeGreen:1,ThemeGreenLight:1,ThemePurple:1,ThemePurpleLight:1,ThemeRed:1,ThemeRedLight:1,ThemeYellow:1,ThemeYellowLight:1},RolePermissionDialog:{DialogTitle:1,EditButton:1,SaveSuccess:1},UserDialog:{EditPermissionsButton:1,EditRolesButton:1},UserPermissionDialog:{DialogTitle:1,Grant:1,Permission:1,Revoke:1,SaveSuccess:1},UserRoleDialog:{DialogTitle:1,SaveSuccess:1},ValidationError:{Title:1}},Validation:{AuthenticationError:1,CantFindUserWithEmail:1,CurrentPasswordMismatch:1,DeleteForeignKeyError:1,EmailConfirm:1,EmailInUse:1,InvalidActivateToken:1,InvalidResetToken:1,MinRequiredPasswordLength:1,SavePrimaryKeyError:1}});
}
