"""Small palette helpers, to try the theme with Python."""

from __future__ import annotations

import re
from dataclasses import dataclass, field
from enum import Enum
from typing import Iterator

HEX_PATTERN = re.compile(r"^#(?:[0-9a-f]{3}){1,2}$", re.IGNORECASE)
MAX_ALPHA = 1.0


class Variant(Enum):
    MAIN = "main"
    DARK = "dark"
    COFFEE = "coffee"


@dataclass(frozen=True)
class Color:
    name: str
    hex: str
    alpha: float = MAX_ALPHA
    tags: list[str] = field(default_factory=list)

    def __post_init__(self) -> None:
        if not HEX_PATTERN.match(self.hex):
            raise ValueError(f"Invalid color for {self.name!r}: {self.hex}")

    @property
    def rgb(self) -> tuple[int, int, int]:
        value = self.hex.lstrip("#")
        return tuple(int(value[i : i + 2], 16) for i in (0, 2, 4))  # type: ignore[return-value]


class Palette:
    """A named group of colors."""

    def __init__(self, name: str, *colors: Color, variant: Variant = Variant.MAIN) -> None:
        self.name = name
        self.variant = variant
        self._colors = {color.name: color for color in colors}

    def __iter__(self) -> Iterator[Color]:
        yield from self._colors.values()

    def __len__(self) -> int:
        return len(self._colors)

    async def save(self, path: str) -> None:
        lines = [f"{c.name} = {c.hex}" for c in self if c.alpha > 0]
        print("\n".join(lines), file=open(path, "w", encoding="utf-8"))


if __name__ == "__main__":
    palette = Palette(
        "Monokai Cotalpa",
        Color("yellow", "#fcdc7d"),
        Color("red", "#fc988d", tags=["error"]),
        Color("green", "#99d874", alpha=0.8),
    )

    # Swap two values, and print the result.
    first, second, *rest = list(palette)
    first, second = second, first
    print(len(palette), first.name, second.rgb, rest or None, True and not False)
