<?php
declare(strict_types=1);

// Cataas SDK base feature

class CataasBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(CataasContext $ctx, array $options): void {}
    public function PostConstruct(CataasContext $ctx): void {}
    public function PostConstructEntity(CataasContext $ctx): void {}
    public function SetData(CataasContext $ctx): void {}
    public function GetData(CataasContext $ctx): void {}
    public function GetMatch(CataasContext $ctx): void {}
    public function SetMatch(CataasContext $ctx): void {}
    public function PrePoint(CataasContext $ctx): void {}
    public function PreSpec(CataasContext $ctx): void {}
    public function PreRequest(CataasContext $ctx): void {}
    public function PreResponse(CataasContext $ctx): void {}
    public function PreResult(CataasContext $ctx): void {}
    public function PreDone(CataasContext $ctx): void {}
    public function PreUnexpected(CataasContext $ctx): void {}
}
