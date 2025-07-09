return {
	"olimorris/onedarkpro.nvim",
	priority = 1000,
	vim.api.nvim_set_hl(0, "IblScope", { fg = "#44475a", nocombine = true }),
	config = function()
		require("onedarkpro").setup({
			options = {
				transparency = true,
			},
			highlights = {
				-- Core UI elements
				Normal = { bg = "NONE" },
				NormalNC = { bg = "NONE" },
				NormalFloat = { bg = "NONE" },
				FloatBorder = { bg = "NONE" },
				VertSplit = { bg = "NONE" },
				StatusLine = { bg = "NONE" },
				LineNr = { bg = "NONE" },
				SignColumn = { bg = "NONE" },
				CursorLine = { bg = "NONE" },
				CursorLineNr = { bg = "NONE" },
				CursorColumn = { bg = "NONE" },

				-- NvimTree
				NvimTreeNormal = { bg = "NONE" },
				NvimTreeNormalNC = { bg = "NONE" },
				NvimTreeEndOfBuffer = { bg = "NONE" },
				NvimTreeVertSplit = { bg = "NONE" },

				-- Telescope
				TelescopeNormal = { bg = "NONE" },
				TelescopeBorder = { bg = "NONE" },
				TelescopePromptNormal = { bg = "NONE" },
				TelescopePromptBorder = { bg = "NONE" },
				TelescopeResultsNormal = { bg = "NONE" },
				TelescopeResultsBorder = { bg = "NONE" },
				TelescopePreviewNormal = { bg = "NONE" },
				TelescopePreviewBorder = { bg = "NONE" },

				-- LSP & diagnostics
				FloatTitle = { bg = "NONE" },
				Pmenu = { bg = "NONE" },
				PmenuSel = { bg = "NONE" },
				PmenuSbar = { bg = "NONE" },
				PmenuThumb = { bg = "NONE" },
				WinSeparator = { bg = "NONE" },

				-- Lazy.nvim and others
				LazyNormal = { bg = "NONE" },
				WhichKeyFloat = { bg = "NONE" },
			},
		})

		vim.cmd("colorscheme onedark")
	end,
}
