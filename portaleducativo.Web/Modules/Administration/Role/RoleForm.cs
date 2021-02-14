using Serenity.ComponentModel;
using System;

namespace portaleducativo.Administration.Forms
{
    [FormScript("Administration.Role")]
    [BasedOnRow(typeof(Entities.RoleRow), CheckNames = true)]
    public class RoleForm
    {
        public String RoleName { get; set; }
    }
}