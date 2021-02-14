using Serenity.ComponentModel;
using Serenity.Services;

namespace portaleducativo.Membership
{
    [FormScript("Membership.Login")]
    [BasedOnRow(typeof(Administration.Entities.UserRow), CheckNames = true)]
    public class LoginRequest : ServiceRequest
    {
        [Placeholder("Usuario")]
        public string Username { get; set; }
        [PasswordEditor, Placeholder("Contrasena"), Required(true)]
        public string Password { get; set; }
    }
}