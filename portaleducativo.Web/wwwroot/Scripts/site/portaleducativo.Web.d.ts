/// <reference types="jquery" />
/// <reference types="jqueryui" />
declare namespace portaleducativo.Administration {
}
declare namespace portaleducativo.Administration {
    interface LanguageForm {
        LanguageId: Serenity.StringEditor;
        LanguageName: Serenity.StringEditor;
    }
    class LanguageForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace portaleducativo.Administration {
    interface LanguageRow {
        Id?: number;
        LanguageId?: string;
        LanguageName?: string;
    }
    namespace LanguageRow {
        const idProperty = "Id";
        const nameProperty = "LanguageName";
        const localTextPrefix = "Administration.Language";
        const lookupKey = "Administration.Language";
        function getLookup(): Q.Lookup<LanguageRow>;
        const deletePermission = "Administration:Translation";
        const insertPermission = "Administration:Translation";
        const readPermission = "Administration:Translation";
        const updatePermission = "Administration:Translation";
        const enum Fields {
            Id = "Id",
            LanguageId = "LanguageId",
            LanguageName = "LanguageName"
        }
    }
}
declare namespace portaleducativo.Administration {
    namespace LanguageService {
        const baseUrl = "Administration/Language";
        function Create(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Language/Create",
            Update = "Administration/Language/Update",
            Delete = "Administration/Language/Delete",
            Retrieve = "Administration/Language/Retrieve",
            List = "Administration/Language/List"
        }
    }
}
declare namespace portaleducativo.Administration {
}
declare namespace portaleducativo.Administration {
}
declare namespace portaleducativo.Administration {
    interface RoleForm {
        RoleName: Serenity.StringEditor;
    }
    class RoleForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace portaleducativo.Administration {
    interface RolePermissionListRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace portaleducativo.Administration {
    interface RolePermissionListResponse extends Serenity.ListResponse<string> {
    }
}
declare namespace portaleducativo.Administration {
    interface RolePermissionRow {
        RolePermissionId?: number;
        RoleId?: number;
        PermissionKey?: string;
        RoleRoleName?: string;
    }
    namespace RolePermissionRow {
        const idProperty = "RolePermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.RolePermission";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            RolePermissionId = "RolePermissionId",
            RoleId = "RoleId",
            PermissionKey = "PermissionKey",
            RoleRoleName = "RoleRoleName"
        }
    }
}
declare namespace portaleducativo.Administration {
    namespace RolePermissionService {
        const baseUrl = "Administration/RolePermission";
        function Update(request: RolePermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: RolePermissionListRequest, onSuccess?: (response: RolePermissionListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/RolePermission/Update",
            List = "Administration/RolePermission/List"
        }
    }
}
declare namespace portaleducativo.Administration {
    interface RolePermissionUpdateRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: string[];
    }
}
declare namespace portaleducativo.Administration {
    interface RoleRow {
        RoleId?: number;
        RoleName?: string;
    }
    namespace RoleRow {
        const idProperty = "RoleId";
        const nameProperty = "RoleName";
        const localTextPrefix = "Administration.Role";
        const lookupKey = "Administration.Role";
        function getLookup(): Q.Lookup<RoleRow>;
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            RoleId = "RoleId",
            RoleName = "RoleName"
        }
    }
}
declare namespace portaleducativo.Administration {
    namespace RoleService {
        const baseUrl = "Administration/Role";
        function Create(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Role/Create",
            Update = "Administration/Role/Update",
            Delete = "Administration/Role/Delete",
            Retrieve = "Administration/Role/Retrieve",
            List = "Administration/Role/List"
        }
    }
}
declare namespace portaleducativo.Administration {
    interface TranslationItem {
        Key?: string;
        SourceText?: string;
        TargetText?: string;
        CustomText?: string;
    }
}
declare namespace portaleducativo.Administration {
    interface TranslationListRequest extends Serenity.ListRequest {
        SourceLanguageID?: string;
        TargetLanguageID?: string;
    }
}
declare namespace portaleducativo.Administration {
    namespace TranslationService {
        const baseUrl = "Administration/Translation";
        function List(request: TranslationListRequest, onSuccess?: (response: Serenity.ListResponse<TranslationItem>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: TranslationUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            List = "Administration/Translation/List",
            Update = "Administration/Translation/Update"
        }
    }
}
declare namespace portaleducativo.Administration {
    interface TranslationUpdateRequest extends Serenity.ServiceRequest {
        TargetLanguageID?: string;
        Translations?: {
            [key: string]: string;
        };
    }
}
declare namespace portaleducativo.Administration {
}
declare namespace portaleducativo.Administration {
    interface UserForm {
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        UserImage: Serenity.ImageUploadEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        Source: Serenity.StringEditor;
    }
    class UserForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace portaleducativo.Administration {
    interface UserPermissionListRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace portaleducativo.Administration {
    interface UserPermissionRow {
        UserPermissionId?: number;
        UserId?: number;
        PermissionKey?: string;
        Granted?: boolean;
        Username?: string;
        User?: string;
    }
    namespace UserPermissionRow {
        const idProperty = "UserPermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.UserPermission";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserPermissionId = "UserPermissionId",
            UserId = "UserId",
            PermissionKey = "PermissionKey",
            Granted = "Granted",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace portaleducativo.Administration {
    namespace UserPermissionService {
        const baseUrl = "Administration/UserPermission";
        function Update(request: UserPermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<UserPermissionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListRolePermissions(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListPermissionKeys(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserPermission/Update",
            List = "Administration/UserPermission/List",
            ListRolePermissions = "Administration/UserPermission/ListRolePermissions",
            ListPermissionKeys = "Administration/UserPermission/ListPermissionKeys"
        }
    }
}
declare namespace portaleducativo.Administration {
    interface UserPermissionUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: UserPermissionRow[];
    }
}
declare namespace portaleducativo.Administration {
    interface UserRoleListRequest extends Serenity.ServiceRequest {
        UserID?: number;
    }
}
declare namespace portaleducativo.Administration {
    interface UserRoleListResponse extends Serenity.ListResponse<number> {
    }
}
declare namespace portaleducativo.Administration {
    interface UserRoleRow {
        UserRoleId?: number;
        UserId?: number;
        RoleId?: number;
        Username?: string;
        User?: string;
    }
    namespace UserRoleRow {
        const idProperty = "UserRoleId";
        const localTextPrefix = "Administration.UserRole";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserRoleId = "UserRoleId",
            UserId = "UserId",
            RoleId = "RoleId",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace portaleducativo.Administration {
    namespace UserRoleService {
        const baseUrl = "Administration/UserRole";
        function Update(request: UserRoleUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserRoleListRequest, onSuccess?: (response: UserRoleListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserRole/Update",
            List = "Administration/UserRole/List"
        }
    }
}
declare namespace portaleducativo.Administration {
    interface UserRoleUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Roles?: number[];
    }
}
declare namespace portaleducativo.Administration {
    interface UserRow {
        UserId?: number;
        Username?: string;
        Source?: string;
        PasswordHash?: string;
        PasswordSalt?: string;
        DisplayName?: string;
        Email?: string;
        UserImage?: string;
        LastDirectoryUpdate?: string;
        IsActive?: number;
        Password?: string;
        PasswordConfirm?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace UserRow {
        const idProperty = "UserId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Username";
        const localTextPrefix = "Administration.User";
        const lookupKey = "Administration.User";
        function getLookup(): Q.Lookup<UserRow>;
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserId = "UserId",
            Username = "Username",
            Source = "Source",
            PasswordHash = "PasswordHash",
            PasswordSalt = "PasswordSalt",
            DisplayName = "DisplayName",
            Email = "Email",
            UserImage = "UserImage",
            LastDirectoryUpdate = "LastDirectoryUpdate",
            IsActive = "IsActive",
            Password = "Password",
            PasswordConfirm = "PasswordConfirm",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace portaleducativo.Administration {
    namespace UserService {
        const baseUrl = "Administration/User";
        function Create(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/User/Create",
            Update = "Administration/User/Update",
            Delete = "Administration/User/Delete",
            Undelete = "Administration/User/Undelete",
            Retrieve = "Administration/User/Retrieve",
            List = "Administration/User/List"
        }
    }
}
declare namespace portaleducativo.Common {
    interface UserPreferenceRetrieveRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
    }
}
declare namespace portaleducativo.Common {
    interface UserPreferenceRetrieveResponse extends Serenity.ServiceResponse {
        Value?: string;
    }
}
declare namespace portaleducativo.Common {
    interface UserPreferenceRow {
        UserPreferenceId?: number;
        UserId?: number;
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
    namespace UserPreferenceRow {
        const idProperty = "UserPreferenceId";
        const nameProperty = "Name";
        const localTextPrefix = "Common.UserPreference";
        const deletePermission = "";
        const insertPermission = "";
        const readPermission = "";
        const updatePermission = "";
        const enum Fields {
            UserPreferenceId = "UserPreferenceId",
            UserId = "UserId",
            PreferenceType = "PreferenceType",
            Name = "Name",
            Value = "Value"
        }
    }
}
declare namespace portaleducativo.Common {
    namespace UserPreferenceService {
        const baseUrl = "Common/UserPreference";
        function Update(request: UserPreferenceUpdateRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: UserPreferenceRetrieveRequest, onSuccess?: (response: UserPreferenceRetrieveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Common/UserPreference/Update",
            Retrieve = "Common/UserPreference/Retrieve"
        }
    }
}
declare namespace portaleducativo.Common {
    interface UserPreferenceUpdateRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
}
declare namespace portaleducativo {
    interface ExcelImportRequest extends Serenity.ServiceRequest {
        FileName?: string;
    }
}
declare namespace portaleducativo {
    interface ExcelImportResponse extends Serenity.ServiceResponse {
        Inserted?: number;
        Updated?: number;
        ErrorList?: string[];
    }
}
declare namespace portaleducativo {
    interface GetNextNumberRequest extends Serenity.ServiceRequest {
        Prefix?: string;
        Length?: number;
    }
}
declare namespace portaleducativo {
    interface GetNextNumberResponse extends Serenity.ServiceResponse {
        Number?: number;
        Serial?: string;
    }
}
declare namespace portaleducativo.Membership {
    interface ChangePasswordForm {
        OldPassword: Serenity.PasswordEditor;
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ChangePasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace portaleducativo.Membership {
    interface ChangePasswordRequest extends Serenity.ServiceRequest {
        OldPassword?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace portaleducativo.Membership {
    interface ForgotPasswordForm {
        Email: Serenity.EmailEditor;
    }
    class ForgotPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace portaleducativo.Membership {
    interface ForgotPasswordRequest extends Serenity.ServiceRequest {
        Email?: string;
    }
}
declare namespace portaleducativo.Membership {
    interface LoginForm {
        Username: Serenity.StringEditor;
        Password: Serenity.PasswordEditor;
    }
    class LoginForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace portaleducativo.Membership {
    interface LoginRequest extends Serenity.ServiceRequest {
        Username?: string;
        Password?: string;
    }
}
declare namespace portaleducativo.Membership {
    interface ResetPasswordForm {
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ResetPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace portaleducativo.Membership {
    interface ResetPasswordRequest extends Serenity.ServiceRequest {
        Token?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace portaleducativo.Membership {
    interface SignUpForm {
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        ConfirmEmail: Serenity.EmailEditor;
        Password: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class SignUpForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace portaleducativo.Membership {
    interface SignUpRequest extends Serenity.ServiceRequest {
        DisplayName?: string;
        Email?: string;
        Password?: string;
    }
}
declare namespace portaleducativo.PortalEducativo {
}
declare namespace portaleducativo.PortalEducativo {
}
declare namespace portaleducativo.PortalEducativo {
    interface AlumnoCursoForm {
        IdCursoAlumno: Serenity.IntegerEditor;
        FechaInicio: Serenity.DateEditor;
        FechaFin: Serenity.DateEditor;
    }
    class AlumnoCursoForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace portaleducativo.PortalEducativo {
    interface AlumnoCursoRow {
        IdAlumnoCurso?: number;
        IdCursoAlumno?: number;
        FechaInicio?: string;
        FechaFin?: string;
        IdAlumnoCursoCarnet?: string;
        IdAlumnoCursoNombre?: string;
        IdAlumnoCursoApellido?: string;
        IdAlumnoCursoFechaNacimiento?: string;
        IdAlumnoCursoDireccion?: string;
        IdAlumnoCursoFoto?: number[];
        IdAlumnoCursoSexo?: string;
        IdAlumnoCursoIdUsuarioAlumno?: number;
        IdAlumnoCursoIdRolAlumno?: number;
        IdCursoAlumnoNombre?: string;
        IdCursoAlumnoDescripcion?: string;
        IdCursoAlumnoFechaInicio?: string;
        IdCursoAlumnoFechaFin?: string;
        IdCursoAlumnoEstado?: string;
        IdCursoAlumnoAviso?: string;
        IdCursoAlumnoImagen?: number[];
        IdCursoAlumnoIdAlumnoCurso?: number;
        IdCursoAlumnoIdDocenteCurso?: number;
    }
    namespace AlumnoCursoRow {
        const idProperty = "IdAlumnoCurso";
        const localTextPrefix = "PortalEducativo.AlumnoCurso";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            IdAlumnoCurso = "IdAlumnoCurso",
            IdCursoAlumno = "IdCursoAlumno",
            FechaInicio = "FechaInicio",
            FechaFin = "FechaFin",
            IdAlumnoCursoCarnet = "IdAlumnoCursoCarnet",
            IdAlumnoCursoNombre = "IdAlumnoCursoNombre",
            IdAlumnoCursoApellido = "IdAlumnoCursoApellido",
            IdAlumnoCursoFechaNacimiento = "IdAlumnoCursoFechaNacimiento",
            IdAlumnoCursoDireccion = "IdAlumnoCursoDireccion",
            IdAlumnoCursoFoto = "IdAlumnoCursoFoto",
            IdAlumnoCursoSexo = "IdAlumnoCursoSexo",
            IdAlumnoCursoIdUsuarioAlumno = "IdAlumnoCursoIdUsuarioAlumno",
            IdAlumnoCursoIdRolAlumno = "IdAlumnoCursoIdRolAlumno",
            IdCursoAlumnoNombre = "IdCursoAlumnoNombre",
            IdCursoAlumnoDescripcion = "IdCursoAlumnoDescripcion",
            IdCursoAlumnoFechaInicio = "IdCursoAlumnoFechaInicio",
            IdCursoAlumnoFechaFin = "IdCursoAlumnoFechaFin",
            IdCursoAlumnoEstado = "IdCursoAlumnoEstado",
            IdCursoAlumnoAviso = "IdCursoAlumnoAviso",
            IdCursoAlumnoImagen = "IdCursoAlumnoImagen",
            IdCursoAlumnoIdAlumnoCurso = "IdCursoAlumnoIdAlumnoCurso",
            IdCursoAlumnoIdDocenteCurso = "IdCursoAlumnoIdDocenteCurso"
        }
    }
}
declare namespace portaleducativo.PortalEducativo {
    namespace AlumnoCursoService {
        const baseUrl = "PortalEducativo/AlumnoCurso";
        function Create(request: Serenity.SaveRequest<AlumnoCursoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AlumnoCursoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AlumnoCursoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AlumnoCursoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "PortalEducativo/AlumnoCurso/Create",
            Update = "PortalEducativo/AlumnoCurso/Update",
            Delete = "PortalEducativo/AlumnoCurso/Delete",
            Retrieve = "PortalEducativo/AlumnoCurso/Retrieve",
            List = "PortalEducativo/AlumnoCurso/List"
        }
    }
}
declare namespace portaleducativo.PortalEducativo {
    interface AlumnoForm {
        Carnet: Serenity.StringEditor;
        Nombre: Serenity.StringEditor;
        Apellido: Serenity.StringEditor;
        FechaNacimiento: Serenity.DateEditor;
        Direccion: Serenity.StringEditor;
        Foto: Serenity.StringEditor;
        Sexo: Serenity.StringEditor;
        IdUsuarioAlumno: Serenity.IntegerEditor;
        IdRolAlumno: Serenity.IntegerEditor;
    }
    class AlumnoForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace portaleducativo.PortalEducativo {
    interface AlumnoRow {
        IdAlumno?: number;
        Carnet?: string;
        Nombre?: string;
        Apellido?: string;
        FechaNacimiento?: string;
        Direccion?: string;
        Foto?: number[];
        Sexo?: string;
        IdUsuarioAlumno?: number;
        IdRolAlumno?: number;
        IdUsuarioAlumnoNombre?: string;
        IdUsuarioAlumnoCorreo?: string;
        IdRolAlumnoNombre?: string;
        IdRolAlumnoDescripcion?: string;
    }
    namespace AlumnoRow {
        const idProperty = "IdAlumno";
        const nameProperty = "Carnet";
        const localTextPrefix = "PortalEducativo.Alumno";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            IdAlumno = "IdAlumno",
            Carnet = "Carnet",
            Nombre = "Nombre",
            Apellido = "Apellido",
            FechaNacimiento = "FechaNacimiento",
            Direccion = "Direccion",
            Foto = "Foto",
            Sexo = "Sexo",
            IdUsuarioAlumno = "IdUsuarioAlumno",
            IdRolAlumno = "IdRolAlumno",
            IdUsuarioAlumnoNombre = "IdUsuarioAlumnoNombre",
            IdUsuarioAlumnoCorreo = "IdUsuarioAlumnoCorreo",
            IdRolAlumnoNombre = "IdRolAlumnoNombre",
            IdRolAlumnoDescripcion = "IdRolAlumnoDescripcion"
        }
    }
}
declare namespace portaleducativo.PortalEducativo {
    namespace AlumnoService {
        const baseUrl = "PortalEducativo/Alumno";
        function Create(request: Serenity.SaveRequest<AlumnoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AlumnoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AlumnoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AlumnoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "PortalEducativo/Alumno/Create",
            Update = "PortalEducativo/Alumno/Update",
            Delete = "PortalEducativo/Alumno/Delete",
            Retrieve = "PortalEducativo/Alumno/Retrieve",
            List = "PortalEducativo/Alumno/List"
        }
    }
}
declare namespace portaleducativo.PortalEducativo {
}
declare namespace portaleducativo.PortalEducativo {
    interface AulaForm {
        Nombre: Serenity.StringEditor;
        Seccion: Serenity.StringEditor;
        IdAlumnoAula: Serenity.IntegerEditor;
        IdDocenteAula: Serenity.IntegerEditor;
        IdCursoAula: Serenity.IntegerEditor;
    }
    class AulaForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace portaleducativo.PortalEducativo {
    interface AulaRow {
        IdAula?: number;
        Nombre?: string;
        Seccion?: string;
        IdAlumnoAula?: number;
        IdDocenteAula?: number;
        IdCursoAula?: number;
        IdAlumnoAulaCarnet?: string;
        IdAlumnoAulaNombre?: string;
        IdAlumnoAulaApellido?: string;
        IdAlumnoAulaFechaNacimiento?: string;
        IdAlumnoAulaDireccion?: string;
        IdAlumnoAulaFoto?: number[];
        IdAlumnoAulaSexo?: string;
        IdAlumnoAulaIdUsuarioAlumno?: number;
        IdAlumnoAulaIdRolAlumno?: number;
        IdDocenteAulaNombre?: string;
        IdDocenteAulaApellido?: string;
        IdDocenteAulaTelefono?: string;
        IdDocenteAulaFechaNacimeinto?: string;
        IdDocenteAulaGradoAcademico?: string;
        IdDocenteAulaDireccion?: string;
        IdDocenteAulaFoto?: number[];
        IdDocenteAulaSexo?: string;
        IdDocenteAulaIdUsuarioDocente?: number;
        IdDocenteAulaIdRolDocente?: number;
        IdDocenteAulaIdCentroEducativoDocente?: number;
        IdCursoAulaNombre?: string;
        IdCursoAulaDescripcion?: string;
        IdCursoAulaFechaInicio?: string;
        IdCursoAulaFechaFin?: string;
        IdCursoAulaEstado?: string;
        IdCursoAulaAviso?: string;
        IdCursoAulaImagen?: number[];
        IdCursoAulaIdAlumnoCurso?: number;
        IdCursoAulaIdDocenteCurso?: number;
    }
    namespace AulaRow {
        const idProperty = "IdAula";
        const nameProperty = "Nombre";
        const localTextPrefix = "PortalEducativo.Aula";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            IdAula = "IdAula",
            Nombre = "Nombre",
            Seccion = "Seccion",
            IdAlumnoAula = "IdAlumnoAula",
            IdDocenteAula = "IdDocenteAula",
            IdCursoAula = "IdCursoAula",
            IdAlumnoAulaCarnet = "IdAlumnoAulaCarnet",
            IdAlumnoAulaNombre = "IdAlumnoAulaNombre",
            IdAlumnoAulaApellido = "IdAlumnoAulaApellido",
            IdAlumnoAulaFechaNacimiento = "IdAlumnoAulaFechaNacimiento",
            IdAlumnoAulaDireccion = "IdAlumnoAulaDireccion",
            IdAlumnoAulaFoto = "IdAlumnoAulaFoto",
            IdAlumnoAulaSexo = "IdAlumnoAulaSexo",
            IdAlumnoAulaIdUsuarioAlumno = "IdAlumnoAulaIdUsuarioAlumno",
            IdAlumnoAulaIdRolAlumno = "IdAlumnoAulaIdRolAlumno",
            IdDocenteAulaNombre = "IdDocenteAulaNombre",
            IdDocenteAulaApellido = "IdDocenteAulaApellido",
            IdDocenteAulaTelefono = "IdDocenteAulaTelefono",
            IdDocenteAulaFechaNacimeinto = "IdDocenteAulaFechaNacimeinto",
            IdDocenteAulaGradoAcademico = "IdDocenteAulaGradoAcademico",
            IdDocenteAulaDireccion = "IdDocenteAulaDireccion",
            IdDocenteAulaFoto = "IdDocenteAulaFoto",
            IdDocenteAulaSexo = "IdDocenteAulaSexo",
            IdDocenteAulaIdUsuarioDocente = "IdDocenteAulaIdUsuarioDocente",
            IdDocenteAulaIdRolDocente = "IdDocenteAulaIdRolDocente",
            IdDocenteAulaIdCentroEducativoDocente = "IdDocenteAulaIdCentroEducativoDocente",
            IdCursoAulaNombre = "IdCursoAulaNombre",
            IdCursoAulaDescripcion = "IdCursoAulaDescripcion",
            IdCursoAulaFechaInicio = "IdCursoAulaFechaInicio",
            IdCursoAulaFechaFin = "IdCursoAulaFechaFin",
            IdCursoAulaEstado = "IdCursoAulaEstado",
            IdCursoAulaAviso = "IdCursoAulaAviso",
            IdCursoAulaImagen = "IdCursoAulaImagen",
            IdCursoAulaIdAlumnoCurso = "IdCursoAulaIdAlumnoCurso",
            IdCursoAulaIdDocenteCurso = "IdCursoAulaIdDocenteCurso"
        }
    }
}
declare namespace portaleducativo.PortalEducativo {
    namespace AulaService {
        const baseUrl = "PortalEducativo/Aula";
        function Create(request: Serenity.SaveRequest<AulaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AulaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AulaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AulaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "PortalEducativo/Aula/Create",
            Update = "PortalEducativo/Aula/Update",
            Delete = "PortalEducativo/Aula/Delete",
            Retrieve = "PortalEducativo/Aula/Retrieve",
            List = "PortalEducativo/Aula/List"
        }
    }
}
declare namespace portaleducativo.PortalEducativo {
}
declare namespace portaleducativo.PortalEducativo {
    interface CentroEducativoForm {
        Nombre: Serenity.StringEditor;
        Direccion: Serenity.StringEditor;
        Telefono: Serenity.StringEditor;
        Correo: Serenity.StringEditor;
        Tipo: Serenity.StringEditor;
        Director: Serenity.StringEditor;
    }
    class CentroEducativoForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace portaleducativo.PortalEducativo {
    interface CentroEducativoRow {
        IdCentroEducativo?: number;
        Nombre?: string;
        Direccion?: string;
        Telefono?: string;
        Correo?: string;
        Tipo?: string;
        Director?: string;
    }
    namespace CentroEducativoRow {
        const idProperty = "IdCentroEducativo";
        const nameProperty = "Nombre";
        const localTextPrefix = "PortalEducativo.CentroEducativo";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            IdCentroEducativo = "IdCentroEducativo",
            Nombre = "Nombre",
            Direccion = "Direccion",
            Telefono = "Telefono",
            Correo = "Correo",
            Tipo = "Tipo",
            Director = "Director"
        }
    }
}
declare namespace portaleducativo.PortalEducativo {
    namespace CentroEducativoService {
        const baseUrl = "PortalEducativo/CentroEducativo";
        function Create(request: Serenity.SaveRequest<CentroEducativoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CentroEducativoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CentroEducativoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CentroEducativoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "PortalEducativo/CentroEducativo/Create",
            Update = "PortalEducativo/CentroEducativo/Update",
            Delete = "PortalEducativo/CentroEducativo/Delete",
            Retrieve = "PortalEducativo/CentroEducativo/Retrieve",
            List = "PortalEducativo/CentroEducativo/List"
        }
    }
}
declare namespace portaleducativo.PortalEducativo {
}
declare namespace portaleducativo.PortalEducativo {
    interface CursoForm {
        Nombre: Serenity.StringEditor;
        Descripcion: Serenity.StringEditor;
        FechaInicio: Serenity.DateEditor;
        FechaFin: Serenity.DateEditor;
        Estado: Serenity.StringEditor;
        Aviso: Serenity.StringEditor;
        Imagen: Serenity.StringEditor;
        IdAlumnoCurso: Serenity.IntegerEditor;
        IdDocenteCurso: Serenity.IntegerEditor;
    }
    class CursoForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace portaleducativo.PortalEducativo {
    interface CursoRow {
        IdCurso?: number;
        Nombre?: string;
        Descripcion?: string;
        FechaInicio?: string;
        FechaFin?: string;
        Estado?: string;
        Aviso?: string;
        Imagen?: number[];
        IdAlumnoCurso?: number;
        IdDocenteCurso?: number;
        IdAlumnoCursoCarnet?: string;
        IdAlumnoCursoNombre?: string;
        IdAlumnoCursoApellido?: string;
        IdAlumnoCursoFechaNacimiento?: string;
        IdAlumnoCursoDireccion?: string;
        IdAlumnoCursoFoto?: number[];
        IdAlumnoCursoSexo?: string;
        IdAlumnoCursoIdUsuarioAlumno?: number;
        IdAlumnoCursoIdRolAlumno?: number;
        IdDocenteCursoNombre?: string;
        IdDocenteCursoApellido?: string;
        IdDocenteCursoTelefono?: string;
        IdDocenteCursoFechaNacimeinto?: string;
        IdDocenteCursoGradoAcademico?: string;
        IdDocenteCursoDireccion?: string;
        IdDocenteCursoFoto?: number[];
        IdDocenteCursoSexo?: string;
        IdDocenteCursoIdUsuarioDocente?: number;
        IdDocenteCursoIdRolDocente?: number;
        IdDocenteCursoIdCentroEducativoDocente?: number;
    }
    namespace CursoRow {
        const idProperty = "IdCurso";
        const nameProperty = "Nombre";
        const localTextPrefix = "PortalEducativo.Curso";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            IdCurso = "IdCurso",
            Nombre = "Nombre",
            Descripcion = "Descripcion",
            FechaInicio = "FechaInicio",
            FechaFin = "FechaFin",
            Estado = "Estado",
            Aviso = "Aviso",
            Imagen = "Imagen",
            IdAlumnoCurso = "IdAlumnoCurso",
            IdDocenteCurso = "IdDocenteCurso",
            IdAlumnoCursoCarnet = "IdAlumnoCursoCarnet",
            IdAlumnoCursoNombre = "IdAlumnoCursoNombre",
            IdAlumnoCursoApellido = "IdAlumnoCursoApellido",
            IdAlumnoCursoFechaNacimiento = "IdAlumnoCursoFechaNacimiento",
            IdAlumnoCursoDireccion = "IdAlumnoCursoDireccion",
            IdAlumnoCursoFoto = "IdAlumnoCursoFoto",
            IdAlumnoCursoSexo = "IdAlumnoCursoSexo",
            IdAlumnoCursoIdUsuarioAlumno = "IdAlumnoCursoIdUsuarioAlumno",
            IdAlumnoCursoIdRolAlumno = "IdAlumnoCursoIdRolAlumno",
            IdDocenteCursoNombre = "IdDocenteCursoNombre",
            IdDocenteCursoApellido = "IdDocenteCursoApellido",
            IdDocenteCursoTelefono = "IdDocenteCursoTelefono",
            IdDocenteCursoFechaNacimeinto = "IdDocenteCursoFechaNacimeinto",
            IdDocenteCursoGradoAcademico = "IdDocenteCursoGradoAcademico",
            IdDocenteCursoDireccion = "IdDocenteCursoDireccion",
            IdDocenteCursoFoto = "IdDocenteCursoFoto",
            IdDocenteCursoSexo = "IdDocenteCursoSexo",
            IdDocenteCursoIdUsuarioDocente = "IdDocenteCursoIdUsuarioDocente",
            IdDocenteCursoIdRolDocente = "IdDocenteCursoIdRolDocente",
            IdDocenteCursoIdCentroEducativoDocente = "IdDocenteCursoIdCentroEducativoDocente"
        }
    }
}
declare namespace portaleducativo.PortalEducativo {
    namespace CursoService {
        const baseUrl = "PortalEducativo/Curso";
        function Create(request: Serenity.SaveRequest<CursoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CursoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CursoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CursoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "PortalEducativo/Curso/Create",
            Update = "PortalEducativo/Curso/Update",
            Delete = "PortalEducativo/Curso/Delete",
            Retrieve = "PortalEducativo/Curso/Retrieve",
            List = "PortalEducativo/Curso/List"
        }
    }
}
declare namespace portaleducativo.PortalEducativo {
}
declare namespace portaleducativo.PortalEducativo {
    interface DocenteForm {
        Nombre: Serenity.StringEditor;
        Apellido: Serenity.StringEditor;
        Telefono: Serenity.StringEditor;
        FechaNacimeinto: Serenity.DateEditor;
        GradoAcademico: Serenity.StringEditor;
        Direccion: Serenity.StringEditor;
        Foto: Serenity.StringEditor;
        Sexo: Serenity.StringEditor;
        IdUsuarioDocente: Serenity.IntegerEditor;
        IdRolDocente: Serenity.IntegerEditor;
        IdCentroEducativoDocente: Serenity.IntegerEditor;
    }
    class DocenteForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace portaleducativo.PortalEducativo {
    interface DocenteRow {
        IdDocente?: number;
        Nombre?: string;
        Apellido?: string;
        Telefono?: string;
        FechaNacimeinto?: string;
        GradoAcademico?: string;
        Direccion?: string;
        Foto?: number[];
        Sexo?: string;
        IdUsuarioDocente?: number;
        IdRolDocente?: number;
        IdCentroEducativoDocente?: number;
        IdUsuarioDocenteNombre?: string;
        IdUsuarioDocenteCorreo?: string;
        IdRolDocenteNombre?: string;
        IdRolDocenteDescripcion?: string;
        IdCentroEducativoDocenteNombre?: string;
        IdCentroEducativoDocenteDireccion?: string;
        IdCentroEducativoDocenteTelefono?: string;
        IdCentroEducativoDocenteCorreo?: string;
        IdCentroEducativoDocenteTipo?: string;
        IdCentroEducativoDocenteDirector?: string;
    }
    namespace DocenteRow {
        const idProperty = "IdDocente";
        const nameProperty = "Nombre";
        const localTextPrefix = "PortalEducativo.Docente";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            IdDocente = "IdDocente",
            Nombre = "Nombre",
            Apellido = "Apellido",
            Telefono = "Telefono",
            FechaNacimeinto = "FechaNacimeinto",
            GradoAcademico = "GradoAcademico",
            Direccion = "Direccion",
            Foto = "Foto",
            Sexo = "Sexo",
            IdUsuarioDocente = "IdUsuarioDocente",
            IdRolDocente = "IdRolDocente",
            IdCentroEducativoDocente = "IdCentroEducativoDocente",
            IdUsuarioDocenteNombre = "IdUsuarioDocenteNombre",
            IdUsuarioDocenteCorreo = "IdUsuarioDocenteCorreo",
            IdRolDocenteNombre = "IdRolDocenteNombre",
            IdRolDocenteDescripcion = "IdRolDocenteDescripcion",
            IdCentroEducativoDocenteNombre = "IdCentroEducativoDocenteNombre",
            IdCentroEducativoDocenteDireccion = "IdCentroEducativoDocenteDireccion",
            IdCentroEducativoDocenteTelefono = "IdCentroEducativoDocenteTelefono",
            IdCentroEducativoDocenteCorreo = "IdCentroEducativoDocenteCorreo",
            IdCentroEducativoDocenteTipo = "IdCentroEducativoDocenteTipo",
            IdCentroEducativoDocenteDirector = "IdCentroEducativoDocenteDirector"
        }
    }
}
declare namespace portaleducativo.PortalEducativo {
    namespace DocenteService {
        const baseUrl = "PortalEducativo/Docente";
        function Create(request: Serenity.SaveRequest<DocenteRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DocenteRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DocenteRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DocenteRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "PortalEducativo/Docente/Create",
            Update = "PortalEducativo/Docente/Update",
            Delete = "PortalEducativo/Docente/Delete",
            Retrieve = "PortalEducativo/Docente/Retrieve",
            List = "PortalEducativo/Docente/List"
        }
    }
}
declare namespace portaleducativo.PortalEducativo {
}
declare namespace portaleducativo.PortalEducativo {
    interface TareaForm {
        Nombre: Serenity.StringEditor;
        Descripcion: Serenity.StringEditor;
        FechaCreacion: Serenity.DateEditor;
        FechaFinalizacion: Serenity.DateEditor;
        DocumentoMaestro: Serenity.StringEditor;
        DocumentoAlumno: Serenity.StringEditor;
        Puntuacion: Serenity.IntegerEditor;
        Comentario: Serenity.StringEditor;
        IdAlumnoTarea: Serenity.IntegerEditor;
    }
    class TareaForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace portaleducativo.PortalEducativo {
    interface TareaRow {
        IdTarea?: number;
        Nombre?: string;
        Descripcion?: string;
        FechaCreacion?: string;
        FechaFinalizacion?: string;
        DocumentoMaestro?: number[];
        DocumentoAlumno?: number[];
        Puntuacion?: number;
        Comentario?: string;
        IdAlumnoTarea?: number;
        IdAlumnoTareaCarnet?: string;
        IdAlumnoTareaNombre?: string;
        IdAlumnoTareaApellido?: string;
        IdAlumnoTareaFechaNacimiento?: string;
        IdAlumnoTareaDireccion?: string;
        IdAlumnoTareaFoto?: number[];
        IdAlumnoTareaSexo?: string;
        IdAlumnoTareaIdUsuarioAlumno?: number;
        IdAlumnoTareaIdRolAlumno?: number;
    }
    namespace TareaRow {
        const idProperty = "IdTarea";
        const nameProperty = "Nombre";
        const localTextPrefix = "PortalEducativo.Tarea";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            IdTarea = "IdTarea",
            Nombre = "Nombre",
            Descripcion = "Descripcion",
            FechaCreacion = "FechaCreacion",
            FechaFinalizacion = "FechaFinalizacion",
            DocumentoMaestro = "DocumentoMaestro",
            DocumentoAlumno = "DocumentoAlumno",
            Puntuacion = "Puntuacion",
            Comentario = "Comentario",
            IdAlumnoTarea = "IdAlumnoTarea",
            IdAlumnoTareaCarnet = "IdAlumnoTareaCarnet",
            IdAlumnoTareaNombre = "IdAlumnoTareaNombre",
            IdAlumnoTareaApellido = "IdAlumnoTareaApellido",
            IdAlumnoTareaFechaNacimiento = "IdAlumnoTareaFechaNacimiento",
            IdAlumnoTareaDireccion = "IdAlumnoTareaDireccion",
            IdAlumnoTareaFoto = "IdAlumnoTareaFoto",
            IdAlumnoTareaSexo = "IdAlumnoTareaSexo",
            IdAlumnoTareaIdUsuarioAlumno = "IdAlumnoTareaIdUsuarioAlumno",
            IdAlumnoTareaIdRolAlumno = "IdAlumnoTareaIdRolAlumno"
        }
    }
}
declare namespace portaleducativo.PortalEducativo {
    namespace TareaService {
        const baseUrl = "PortalEducativo/Tarea";
        function Create(request: Serenity.SaveRequest<TareaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TareaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TareaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TareaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "PortalEducativo/Tarea/Create",
            Update = "PortalEducativo/Tarea/Update",
            Delete = "PortalEducativo/Tarea/Delete",
            Retrieve = "PortalEducativo/Tarea/Retrieve",
            List = "PortalEducativo/Tarea/List"
        }
    }
}
declare namespace portaleducativo {
    interface ScriptUserDefinition {
        Username?: string;
        DisplayName?: string;
        IsAdmin?: boolean;
        Permissions?: {
            [key: string]: boolean;
        };
    }
}
declare namespace portaleducativo.Texts {
}
declare namespace portaleducativo.Administration {
    class LanguageDialog extends Serenity.EntityDialog<LanguageRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LanguageForm;
    }
}
declare namespace portaleducativo.Administration {
    class LanguageGrid extends Serenity.EntityGrid<LanguageRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LanguageDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): LanguageRow.Fields[];
    }
}
declare namespace portaleducativo.Administration {
    class RoleDialog extends Serenity.EntityDialog<RoleRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RoleForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace portaleducativo.Administration {
    class RoleGrid extends Serenity.EntityGrid<RoleRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RoleDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): RoleRow.Fields[];
    }
}
declare namespace portaleducativo.Administration {
    class RolePermissionDialog extends Serenity.TemplatedDialog<RolePermissionDialogOptions> {
        private permissions;
        constructor(opt: RolePermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface RolePermissionDialogOptions {
        roleID?: number;
        title?: string;
    }
}
declare namespace portaleducativo.Administration {
    class TranslationGrid extends Serenity.EntityGrid<TranslationItem, any> {
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private hasChanges;
        private searchText;
        private sourceLanguage;
        private targetLanguage;
        private targetLanguageKey;
        constructor(container: JQuery);
        protected onClick(e: JQueryEventObject, row: number, cell: number): any;
        protected getColumns(): Slick.Column[];
        protected createToolbarExtensions(): void;
        protected saveChanges(language: string): PromiseLike<any>;
        protected onViewSubmit(): boolean;
        protected getButtons(): Serenity.ToolButton[];
        protected createQuickSearchInput(): void;
        protected onViewFilter(item: TranslationItem): boolean;
        protected usePager(): boolean;
    }
}
declare namespace portaleducativo.Administration {
    class UserDialog extends Serenity.EntityDialog<UserRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: UserForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
        protected afterLoadEntity(): void;
    }
}
declare namespace portaleducativo.Administration {
    class UserGrid extends Serenity.EntityGrid<UserRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserDialog;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): UserRow.Fields[];
    }
}
declare namespace portaleducativo.Authorization {
    let userDefinition: ScriptUserDefinition;
    function hasPermission(permissionKey: string): boolean;
}
declare namespace portaleducativo.Administration {
    class PermissionCheckEditor extends Serenity.DataGrid<PermissionCheckItem, PermissionCheckEditorOptions> {
        protected getIdProperty(): string;
        private searchText;
        private byParentKey;
        constructor(container: JQuery, opt: PermissionCheckEditorOptions);
        private getItemGrantRevokeClass;
        private roleOrImplicit;
        private getItemEffectiveClass;
        protected getColumns(): Slick.Column[];
        setItems(items: PermissionCheckItem[]): void;
        protected onViewSubmit(): boolean;
        protected onViewFilter(item: PermissionCheckItem): boolean;
        private matchContains;
        private getDescendants;
        protected onClick(e: any, row: any, cell: any): void;
        private getParentKey;
        protected getButtons(): Serenity.ToolButton[];
        protected createToolbarExtensions(): void;
        private getSortedGroupAndPermissionKeys;
        get value(): UserPermissionRow[];
        set value(value: UserPermissionRow[]);
        private _rolePermissions;
        get rolePermissions(): string[];
        set rolePermissions(value: string[]);
        private _implicitPermissions;
        set implicitPermissions(value: Q.Dictionary<string[]>);
    }
    interface PermissionCheckEditorOptions {
        showRevoke?: boolean;
    }
    interface PermissionCheckItem {
        ParentKey?: string;
        Key?: string;
        Title?: string;
        IsGroup?: boolean;
        GrantRevoke?: boolean;
    }
}
declare namespace portaleducativo.Administration {
    class UserPermissionDialog extends Serenity.TemplatedDialog<UserPermissionDialogOptions> {
        private permissions;
        constructor(opt: UserPermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserPermissionDialogOptions {
        userID?: number;
        username?: string;
    }
}
declare namespace portaleducativo.Administration {
    class RoleCheckEditor extends Serenity.CheckTreeEditor<Serenity.CheckTreeItem<any>, any> {
        private searchText;
        constructor(div: JQuery);
        protected createToolbarExtensions(): void;
        protected getButtons(): any[];
        protected getTreeItems(): Serenity.CheckTreeItem<any>[];
        protected onViewFilter(item: any): boolean;
    }
}
declare namespace portaleducativo.Administration {
    class UserRoleDialog extends Serenity.TemplatedDialog<UserRoleDialogOptions> {
        private permissions;
        constructor(opt: UserRoleDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserRoleDialogOptions {
        userID: number;
        username: string;
    }
}
declare namespace portaleducativo.LanguageList {
    function getValue(): string[][];
}
declare namespace portaleducativo.ScriptInitialization {
}
declare namespace portaleducativo {
    class BasicProgressDialog extends Serenity.TemplatedDialog<any> {
        constructor();
        cancelled: boolean;
        get max(): number;
        set max(value: number);
        get value(): number;
        set value(value: number);
        get title(): string;
        set title(value: string);
        cancelTitle: string;
        getDialogOptions(): JQueryUI.DialogOptions;
        initDialog(): void;
        getTemplate(): string;
    }
}
declare namespace portaleducativo.Common {
    class BulkServiceAction {
        protected keys: string[];
        protected queue: string[];
        protected queueIndex: number;
        protected progressDialog: BasicProgressDialog;
        protected pendingRequests: number;
        protected completedRequests: number;
        protected errorByKey: Q.Dictionary<Serenity.ServiceError>;
        private successCount;
        private errorCount;
        done: () => void;
        protected createProgressDialog(): void;
        protected getConfirmationFormat(): string;
        protected getConfirmationMessage(targetCount: any): string;
        protected confirm(targetCount: any, action: any): void;
        protected getNothingToProcessMessage(): string;
        protected nothingToProcess(): void;
        protected getParallelRequests(): number;
        protected getBatchSize(): number;
        protected startParallelExecution(): void;
        protected serviceCallCleanup(): void;
        protected executeForBatch(batch: string[]): void;
        protected executeNextBatch(): void;
        protected getAllHadErrorsFormat(): string;
        protected showAllHadErrors(): void;
        protected getSomeHadErrorsFormat(): string;
        protected showSomeHadErrors(): void;
        protected getAllSuccessFormat(): string;
        protected showAllSuccess(): void;
        protected showResults(): void;
        execute(keys: string[]): void;
        get_successCount(): any;
        set_successCount(value: number): void;
        get_errorCount(): any;
        set_errorCount(value: number): void;
    }
}
declare namespace portaleducativo.DialogUtils {
    function pendingChangesConfirmation(element: JQuery, hasPendingChanges: () => boolean): void;
}
declare namespace portaleducativo.Common {
    class EnumSelectFormatter implements Slick.Formatter {
        constructor();
        format(ctx: Slick.FormatterContext): string;
        enumKey: string;
        allowClear: boolean;
        emptyItemText: string;
    }
}
declare namespace portaleducativo.Common {
    interface ExcelExportOptions {
        grid: Serenity.DataGrid<any, any>;
        service: string;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
    }
    namespace ExcelExportHelper {
        function createToolButton(options: ExcelExportOptions): Serenity.ToolButton;
    }
}
declare namespace portaleducativo.Common {
    class GridEditorBase<TEntity> extends Serenity.EntityGrid<TEntity, any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        protected getIdProperty(): string;
        protected nextId: number;
        constructor(container: JQuery);
        protected id(entity: TEntity): any;
        protected getNextId(): string;
        protected setNewId(entity: TEntity): void;
        protected save(opt: Serenity.ServiceOptions<any>, callback: (r: Serenity.ServiceResponse) => void): void;
        protected deleteEntity(id: number): boolean;
        protected validateEntity(row: TEntity, id: number): boolean;
        protected setEntities(items: TEntity[]): void;
        protected getNewEntity(): TEntity;
        protected getButtons(): Serenity.ToolButton[];
        protected editItem(entityOrId: any): void;
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
        get value(): TEntity[];
        set value(value: TEntity[]);
        protected getGridCanLoad(): boolean;
        protected usePager(): boolean;
        protected getInitialTitle(): any;
        protected createQuickSearchInput(): void;
        protected enableDeleteColumn(): boolean;
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace portaleducativo.Common {
    class GridEditorDialog<TEntity> extends Serenity.EntityDialog<TEntity, any> {
        protected getIdProperty(): string;
        onSave: (options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void) => void;
        onDelete: (options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void) => void;
        destroy(): void;
        protected updateInterface(): void;
        protected saveHandler(options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void): void;
        protected deleteHandler(options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void): void;
    }
}
declare namespace portaleducativo {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    class StaticTextBlock extends Serenity.Widget<StaticTextBlockOptions> implements Serenity.ISetEditValue {
        private value;
        constructor(container: JQuery, options: StaticTextBlockOptions);
        private updateElementContent;
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        setEditValue(source: any, property: Serenity.PropertyItem): void;
    }
    interface StaticTextBlockOptions {
        text: string;
        isHtml: boolean;
        isLocalText: boolean;
        hideLabel: boolean;
    }
}
declare namespace portaleducativo.Common {
    class LanguageSelection extends Serenity.Widget<any> {
        constructor(select: JQuery, currentLanguage: string);
    }
}
declare namespace portaleducativo.Common {
    class SidebarSearch extends Serenity.Widget<any> {
        private menuUL;
        constructor(input: JQuery, menuUL: JQuery);
        protected updateMatchFlags(text: string): void;
    }
}
declare namespace portaleducativo.Common {
    class ThemeSelection extends Serenity.Widget<any> {
        constructor(select: JQuery);
        protected getCurrentTheme(): string;
    }
}
declare var jsPDF: any;
declare namespace portaleducativo.Common {
    interface PdfExportOptions {
        grid: Serenity.DataGrid<any, any>;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
        reportTitle?: string;
        titleTop?: number;
        titleFontSize?: number;
        fileName?: string;
        pageNumbers?: boolean;
        columnTitles?: {
            [key: string]: string;
        };
        tableOptions?: jsPDF.AutoTableOptions;
        output?: string;
        autoPrint?: boolean;
        printDateTimeHeader?: boolean;
    }
    namespace PdfExportHelper {
        function exportToPdf(options: PdfExportOptions): void;
        function createToolButton(options: PdfExportOptions): Serenity.ToolButton;
    }
}
declare var jsPDF: any;
declare namespace portaleducativo.Common {
    class ReportDialog extends Serenity.TemplatedDialog<ReportDialogOptions> {
        private report;
        private propertyGrid;
        constructor(options: ReportDialogOptions);
        protected getDialogButtons(): any;
        protected createPropertyGrid(): void;
        protected loadReport(reportKey: string): void;
        protected updateInterface(): void;
        executeReport(target: string, ext: string, download: boolean): void;
        getToolbarButtons(): {
            title: string;
            cssClass: string;
            onClick: () => void;
        }[];
    }
    interface ReportDialogOptions {
        reportKey: string;
    }
}
declare namespace portaleducativo.Common {
    interface ReportExecuteOptions {
        reportKey: string;
        download?: boolean;
        extension?: 'pdf' | 'htm' | 'html' | 'xlsx' | 'docx';
        getParams?: () => any;
        params?: {
            [key: string]: any;
        };
        target?: string;
    }
    interface ReportButtonOptions extends ReportExecuteOptions {
        title?: string;
        cssClass?: string;
        icon?: string;
    }
    namespace ReportHelper {
        function createToolButton(options: ReportButtonOptions): Serenity.ToolButton;
        function execute(options: ReportExecuteOptions): void;
    }
}
declare var jsPDF: any;
declare namespace portaleducativo.Common {
    class ReportPage extends Serenity.Widget<any> {
        private reportKey;
        private propertyItems;
        private propertyGrid;
        constructor(element: JQuery);
        protected updateMatchFlags(text: string): void;
        protected categoryClick(e: any): void;
        protected reportLinkClick(e: any): void;
    }
}
declare namespace portaleducativo.Common {
    class UserPreferenceStorage implements Serenity.SettingStorage {
        getItem(key: string): string;
        setItem(key: string, data: string): void;
    }
}
declare namespace portaleducativo.Membership {
    class LoginPanel extends Serenity.PropertyPanel<LoginRequest, any> {
        protected getFormKey(): string;
        constructor(container: JQuery);
        protected redirectToReturnUrl(): void;
        protected getTemplate(): string;
    }
}
declare namespace portaleducativo.Membership {
    class ChangePasswordPanel extends Serenity.PropertyPanel<ChangePasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace portaleducativo.Membership {
    class ForgotPasswordPanel extends Serenity.PropertyPanel<ForgotPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace portaleducativo.Membership {
    class ResetPasswordPanel extends Serenity.PropertyPanel<ResetPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace portaleducativo.Membership {
    class SignUpPanel extends Serenity.PropertyPanel<SignUpRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace portaleducativo.PortalEducativo {
    class AlumnoDialog extends Serenity.EntityDialog<AlumnoRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: AlumnoForm;
    }
}
declare namespace portaleducativo.PortalEducativo {
    class AlumnoGrid extends Serenity.EntityGrid<AlumnoRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AlumnoDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace portaleducativo.PortalEducativo {
    class AlumnoCursoDialog extends Serenity.EntityDialog<AlumnoCursoRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: AlumnoCursoForm;
    }
}
declare namespace portaleducativo.PortalEducativo {
    class AlumnoCursoGrid extends Serenity.EntityGrid<AlumnoCursoRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AlumnoCursoDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace portaleducativo.PortalEducativo {
    class AulaDialog extends Serenity.EntityDialog<AulaRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: AulaForm;
    }
}
declare namespace portaleducativo.PortalEducativo {
    class AulaGrid extends Serenity.EntityGrid<AulaRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AulaDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace portaleducativo.PortalEducativo {
    class CentroEducativoDialog extends Serenity.EntityDialog<CentroEducativoRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CentroEducativoForm;
    }
}
declare namespace portaleducativo.PortalEducativo {
    class CentroEducativoGrid extends Serenity.EntityGrid<CentroEducativoRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CentroEducativoDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace portaleducativo.PortalEducativo {
    class CursoDialog extends Serenity.EntityDialog<CursoRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CursoForm;
    }
}
declare namespace portaleducativo.PortalEducativo {
    class CursoGrid extends Serenity.EntityGrid<CursoRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CursoDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace portaleducativo.PortalEducativo {
    class DocenteDialog extends Serenity.EntityDialog<DocenteRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: DocenteForm;
    }
}
declare namespace portaleducativo.PortalEducativo {
    class DocenteGrid extends Serenity.EntityGrid<DocenteRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DocenteDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace portaleducativo.PortalEducativo {
    class TareaDialog extends Serenity.EntityDialog<TareaRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: TareaForm;
    }
}
declare namespace portaleducativo.PortalEducativo {
    class TareaGrid extends Serenity.EntityGrid<TareaRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TareaDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
