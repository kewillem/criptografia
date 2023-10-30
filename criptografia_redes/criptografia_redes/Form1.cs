using criptografia_redes.RegrasDeNegocio;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using criptografia_redes.Classes;
using criptografia_redes.Properties;

namespace criptografia_redes
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void btCalcular_Click(object sender, EventArgs e)
        {
            var form = new calculoConversor();
            form.ShowDialog();
        }
    }
}
