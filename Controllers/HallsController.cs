using DotNetCore.AspNetCore;
using DotNetCore.Objects;
using DotNetCoreArchitecture.Application;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using System;
using System.Xml.Serialization;
using System.IO;
using System.Xml;
using HRMS.Model;
using DotNetCore.Results;

namespace DotNetCoreArchitecture.Web
{
    [ApiController]
    [RouteController(Name = "Items")]
    public class HallsController : BaseController
    {
        public HallsController(IItemApplicationService userApplicationService)
        {
            ItemApplicationService = userApplicationService;
        }

        private IItemApplicationService ItemApplicationService { get; }

        [AllowAnonymous]
        [HttpPost("Add")]
        public async Task<IDataResult<long>> AddAsync(ItemModel itemModel)
        {
            return await ItemApplicationService.AddAsync(itemModel);
        }


        [AllowAnonymous]
        [HttpPost("Update/{Id}")]
        public async Task<IDataResult<long>> UpdateAsync(ItemModel itemModel, string Id)
        {
            Guid guid = Guid.Parse(Id);
            return await ItemApplicationService.UpdateAsync(itemModel, guid);
        }


        [AllowAnonymous]
        [HttpGet("List")]
        public async Task<string> ListAsync()
        {

            var xml = await ItemApplicationService.ListAsync();
            /* XmlSerializer xsSubmit = new XmlSerializer(typeof(string));

             var xml_ = string.Empty;

             using (var sww = new StringWriter())
             {
                 using (XmlWriter writer = XmlWriter.Create(sww))
                 {
                     xsSubmit.Serialize(writer, xml);
                     xml_ = sww.ToString(); // Your XML
                 }
             }*/
            return xml;
        }

        [AllowAnonymous]
        [HttpGet("FindBy/{Id}")]
        public async Task<ItemModel> FindByAsync(string Id)
        {
            Guid guid = Guid.Parse(Id);
            ItemModel model = await ItemApplicationService.FindBySync(guid);
            return model;
        }
    }
}