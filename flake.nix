{
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixpkgs-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
  flake-utils.lib.eachDefaultSystem(system:
    let pkgs = import nixpkgs { inherit system; }; in
    {
      devShells.default = pkgs.mkShell {
        packages = [
          pkgs.nodejs_24
          pkgs.pnpm_11
          pkgs.python314
          pkgs.python314Packages.cairosvg
        ];
      };
    }
  );
}
