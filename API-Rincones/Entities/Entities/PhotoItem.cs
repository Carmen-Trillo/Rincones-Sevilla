﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Entities
{
    public class PhotoItem
    {
        public int Id {  get; set; }
        public Guid IdWeb { get; set; }
        public PhotoItem PhotoFile { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime InsertDate { get; set; }
        public DateTime? UpdateDate { get; set; }
        public bool IsActive { get; set; }
    }
}
