//! Small palette helpers, to try the theme with Rust.

use std::collections::HashMap;
use std::fmt;

const MAX_ALPHA: f32 = 1.0;
static THEME: &str = "Monokai Cotalpa";

#[derive(Debug, Clone, Copy, PartialEq, Eq, Hash)]
pub enum Variant {
    Main,
    Dark,
    Coffee,
}

#[derive(Debug, Clone)]
pub struct Color {
    pub name: String,
    pub hex: String,
    alpha: f32,
}

pub trait Describe {
    fn describe(&self) -> String;
}

impl Color {
    pub fn new(name: &str, hex: &str) -> Result<Self, String> {
        if !hex.starts_with('#') || hex.len() != 7 {
            return Err(format!("Invalid color for {name}: {hex}"));
        }

        Ok(Self { name: name.to_owned(), hex: hex.to_lowercase(), alpha: MAX_ALPHA })
    }

    pub fn rgb(&self) -> Option<(u8, u8, u8)> {
        let channel = |i: usize| u8::from_str_radix(&self.hex[i..i + 2], 16).ok();
        Some((channel(1)?, channel(3)?, channel(5)?))
    }
}

impl fmt::Display for Color {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(f, "{} ({}, {:.2})", self.name, self.hex, self.alpha)
    }
}

impl Describe for Variant {
    fn describe(&self) -> String {
        match self {
            Variant::Main => "the main theme".into(),
            Variant::Dark | Variant::Coffee => format!("{self:?} variant"),
        }
    }
}

fn main() {
    let mut palette: HashMap<&str, Color> = HashMap::new();

    for (name, hex) in [("yellow", "#fcdc7d"), ("red", "#fc988d"), ("green", "#99d874")] {
        match Color::new(name, hex) {
            Ok(color) => {
                palette.insert(name, color);
            }
            Err(error) => eprintln!("{error}"),
        }
    }

    let total = palette.values().filter_map(Color::rgb).count();
    println!("{THEME}: {total} colors, {}", Variant::Coffee.describe());
}
