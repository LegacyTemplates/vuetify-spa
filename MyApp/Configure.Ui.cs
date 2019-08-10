using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using ServiceStack;

namespace MyApp
{
    public class ConfigureUi : IConfigureAppHost
    {
        public void Configure(IAppHost appHost)
        {
            var svgDir = appHost.RootDirectory.GetDirectory("/svg");
            if (svgDir == null)
                throw new Exception($"/wwwroot/svg does not exist, build Client App with 'npm run build'");
            Svg.Load(svgDir);
        }
    }
}
