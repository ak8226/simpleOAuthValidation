using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.Owin;

[assembly: OwinStartup(typeof(OauthProject.API.Startup))]
namespace OauthProject
{
    public class Startup
    {
    }
}