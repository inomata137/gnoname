# /// script
# requires-python = ">=3.14"
# dependencies = [
#     "cairosvg>=2.9.0",
# ]
# ///

from cairosvg import svg2png

def main() -> None:
    for size in [16, 32, 48, 96, 128]:
        svg2png(
            url="./assets/icon.svg",
            write_to=f"./public/icon/{size}.png",
            output_height=size,
            output_width=size
        )


if __name__ == "__main__":
    main()
